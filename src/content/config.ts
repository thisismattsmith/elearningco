// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('The eLearning Company'),
    category: z.enum([
      'Compliance & Risk',
      'Onboarding & Culture',
      'Skills Development',
      'Operational Training',
      'eLearning Best Practices',
      'Industry Insights'
    ]),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }).optional(),
  }),
});

const trainingCategories = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    category: z.enum([
      'Compliance & Risk',
      'Onboarding & Culture', 
      'Skills Development',
      'Operational Training'
    ]),
    topics: z.array(z.string()),
    tier1Example: z.string(),
    tier2Example: z.string(),
    tier3Example: z.string(),
    commonMistakes: z.array(z.string()).optional(),
    bestPractices: z.array(z.string()).optional(),
  }),
});

export const collections = {
  'blog': blog,
  'training-categories': trainingCategories,
};