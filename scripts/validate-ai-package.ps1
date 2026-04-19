$ErrorActionPreference = "Stop"

function Add-Failure {
  param(
    [System.Collections.Generic.List[string]]$Failures,
    [string]$Message
  )

  $Failures.Add($Message) | Out-Null
}

$repoRoot = Resolve-Path (Join-Path $PSScriptRoot "..")
$aiRoot = Join-Path $repoRoot "ai"
$failures = New-Object 'System.Collections.Generic.List[string]'

$requiredTextFiles = @(
  "llms.txt",
  "llms-full.txt",
  "index.md",
  "system.md"
)

foreach ($file in $requiredTextFiles) {
  $path = Join-Path $aiRoot $file
  if (-not (Test-Path $path)) {
    Add-Failure -Failures $failures -Message "Arquivo ausente: ai/$file"
  }
}

$jsonFiles = @(
  "system.json",
  "components.json",
  "recipes.json",
  "templates.json",
  "assets.json",
  "decision-rules.json"
)

foreach ($file in $jsonFiles) {
  $path = Join-Path $aiRoot $file
  if (-not (Test-Path $path)) {
    Add-Failure -Failures $failures -Message "JSON ausente: ai/$file"
    continue
  }

  try {
    $json = Get-Content $path -Raw -Encoding UTF8 | ConvertFrom-Json
  } catch {
    Add-Failure -Failures $failures -Message "Falha ao interpretar ai/$file"
    continue
  }

  if (-not $json.'$schema') {
    Add-Failure -Failures $failures -Message "Arquivo sem campo `$schema: ai/$file"
  } else {
    $schemaPath = Join-Path $aiRoot ($json.'$schema' -replace '^\./', '')
    if (-not (Test-Path $schemaPath)) {
      Add-Failure -Failures $failures -Message "Schema referenciado nao encontrado para ai/$file"
    }
  }
}

$systemPath = Join-Path $aiRoot "system.json"
if (Test-Path $systemPath) {
  $systemJson = Get-Content $systemPath -Raw -Encoding UTF8 | ConvertFrom-Json

  foreach ($item in $systemJson.preferred_reading_order) {
    $normalized = $item -replace '^\./', ''
    $normalized = $normalized -replace '^\.\./', '..\'
    $path = Join-Path $aiRoot $normalized
    if (-not (Test-Path $path)) {
      Add-Failure -Failures $failures -Message "Arquivo referenciado em preferred_reading_order nao existe: $item"
    }
  }

  $sourceProps = $systemJson.source_of_truth.PSObject.Properties
  foreach ($property in $sourceProps) {
    $normalized = $property.Value -replace '^\./', ''
    $normalized = $normalized -replace '^\.\./', '..\'
    $path = Join-Path $aiRoot $normalized
    if (-not (Test-Path $path)) {
      Add-Failure -Failures $failures -Message "Source of truth ausente: $($property.Value)"
    }
  }

  foreach ($contract in $systemJson.contracts) {
    $normalized = $contract.file -replace '^\./', ''
    $normalized = $normalized -replace '^\.\./', '..\'
    $path = Join-Path $aiRoot $normalized
    if (-not (Test-Path $path)) {
      Add-Failure -Failures $failures -Message "Contrato referenciado ausente: $($contract.file)"
    }
  }
}

if ($failures.Count -gt 0) {
  Write-Host ""
  Write-Host "Validacao do pacote AI falhou." -ForegroundColor Red
  foreach ($failure in $failures) {
    Write-Host " - $failure" -ForegroundColor Red
  }
  exit 1
}

Write-Host ""
Write-Host "Pacote AI validado com sucesso." -ForegroundColor Green
Write-Host "Arquivos principais, schemas e referencias existem." -ForegroundColor Green
