import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

const baseSchema = z.object({
  title: z.string(),
  summary: z.string(),
  audience: z.array(z.string()),
  status: z.enum(['draft', 'active']),
  order: z.number(),
});

const foundations = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/foundations' }),
  schema: baseSchema.extend({
    category: z.enum(['color', 'typography', 'layout']),
  }),
});

const patterns = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/patterns' }),
  schema: baseSchema.extend({
    channel: z.enum(['deck', 'proposal', 'landing-page', 'website']),
  }),
});

const templates = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/templates' }),
  schema: baseSchema.extend({
    format: z.enum(['presentation', 'proposal', 'landing-page']),
    figmaUrl: z.url().optional(),
  }),
});

const aiPlaybooks = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/ai-playbooks' }),
  schema: baseSchema.extend({
    outputType: z.enum(['presentation', 'document', 'landing-page']),
  }),
});

const governance = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/governance' }),
  schema: baseSchema.extend({
    owner: z.string(),
  }),
});

export const collections = {
  foundations,
  patterns,
  templates,
  'ai-playbooks': aiPlaybooks,
  governance,
};
