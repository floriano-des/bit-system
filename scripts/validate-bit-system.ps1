$ErrorActionPreference = "Stop"

function Add-Failure {
  param(
    [System.Collections.Generic.List[string]]$Failures,
    [string]$Message
  )

  $Failures.Add($Message) | Out-Null
}

function Collect-PathEntries {
  param(
    [Parameter(Mandatory = $true)]$Node,
    [Parameter(Mandatory = $true)][string]$JsonPath,
    [System.Collections.Generic.List[object]]$Entries
  )

  if ($null -eq $Node) {
    return
  }

  if ($Node -is [System.Management.Automation.PSCustomObject]) {
    $properties = $Node.PSObject.Properties
    foreach ($property in $properties) {
      $childPath = "$JsonPath.$($property.Name)"
      if ($property.Name -eq "path" -and $property.Value -is [string]) {
        $Entries.Add([pscustomobject]@{
          JsonPath = $childPath
          RelativePath = $property.Value
        }) | Out-Null
      }
      Collect-PathEntries -Node $property.Value -JsonPath $childPath -Entries $Entries
    }
    return
  }

  if ($Node -is [System.Collections.IEnumerable] -and -not ($Node -is [string])) {
    $index = 0
    foreach ($item in $Node) {
      Collect-PathEntries -Node $item -JsonPath "$JsonPath[$index]" -Entries $Entries
      $index++
    }
  }
}

function Collect-IconEntries {
  param(
    [Parameter(Mandatory = $true)]$CategoriesNode,
    [System.Collections.Generic.List[object]]$Entries
  )

  foreach ($category in $CategoriesNode.PSObject.Properties) {
    if ($category.Name.StartsWith('$')) {
      continue
    }

    foreach ($icon in $category.Value.PSObject.Properties) {
      if ($icon.Name.StartsWith('$')) {
        continue
      }

      if ($icon.Value.PSObject.Properties.Name -contains "id") {
        $Entries.Add([pscustomobject]@{
          Category = $category.Name
          Name = $icon.Name
          Id = $icon.Value.id
        }) | Out-Null
      }
    }
  }
}

$repoRoot = Resolve-Path (Join-Path $PSScriptRoot "..")
$manifestPath = Join-Path $repoRoot "assets\manifest.json"
$iconsPath = Join-Path $repoRoot "assets\icons.svg"
$failures = New-Object 'System.Collections.Generic.List[string]'

if (-not (Test-Path $manifestPath)) {
  throw "Manifest não encontrado em $manifestPath"
}

if (-not (Test-Path $iconsPath)) {
  throw "Sprite de ícones não encontrado em $iconsPath"
}

$manifestRaw = Get-Content $manifestPath -Raw -Encoding UTF8
try {
  $manifest = $manifestRaw | ConvertFrom-Json
} catch {
  throw "Falha ao interpretar assets/manifest.json: $($_.Exception.Message)"
}

$pathEntries = New-Object 'System.Collections.Generic.List[object]'
Collect-PathEntries -Node $manifest -JsonPath '$' -Entries $pathEntries

foreach ($entry in $pathEntries) {
  $absolutePath = Join-Path $repoRoot $entry.RelativePath
  if (-not (Test-Path $absolutePath)) {
    Add-Failure -Failures $failures -Message "Path ausente no manifest: $($entry.RelativePath) em $($entry.JsonPath)"
  }
}

$iconsRaw = Get-Content $iconsPath -Raw -Encoding UTF8
$symbolMatches = [regex]::Matches($iconsRaw, '<symbol\s+id="([^"]+)"')
$spriteIds = New-Object 'System.Collections.Generic.HashSet[string]'

foreach ($match in $symbolMatches) {
  [void]$spriteIds.Add($match.Groups[1].Value)
}

if (-not $manifest.icons -or -not $manifest.icons.categories) {
  Add-Failure -Failures $failures -Message "Manifest sem bloco icons.categories"
} else {
  $iconEntries = New-Object 'System.Collections.Generic.List[object]'
  Collect-IconEntries -CategoriesNode $manifest.icons.categories -Entries $iconEntries

  $declaredIds = New-Object 'System.Collections.Generic.HashSet[string]'
  foreach ($entry in $iconEntries) {
    if (-not $declaredIds.Add($entry.Id)) {
      Add-Failure -Failures $failures -Message "Id de ícone duplicado no manifest: $($entry.Id)"
    }

    if (-not $spriteIds.Contains($entry.Id)) {
      Add-Failure -Failures $failures -Message "Id de ícone ausente no sprite: $($entry.Id) ($($entry.Category)/$($entry.Name))"
    }
  }
}

if ($failures.Count -gt 0) {
  Write-Host ""
  Write-Host "Validação falhou." -ForegroundColor Red
  foreach ($failure in $failures) {
    Write-Host " - $failure" -ForegroundColor Red
  }
  exit 1
}

Write-Host ""
Write-Host "Validação concluída com sucesso." -ForegroundColor Green
Write-Host "Manifest parseável, paths encontrados e ids de ícone válidos." -ForegroundColor Green
