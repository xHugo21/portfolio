import { z, defineCollection } from 'astro:content'

const projectsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    link: z.string(),
  }),
})

const educationCollection = defineCollection({
  type: 'data',
  schema: z.object({
    institution: z.string(),
    degree: z.string(),
    year: z.number().optional(),
  }),
})

const careerCollection = defineCollection({
  type: 'data',
  schema: z.object({
    company: z.string(),
    position: z.string(),
    location: z.string(),
    startYear: z.number(),
    endYear: z.number().optional(),
  }),
})

export const collections = {
  projects: projectsCollection,
  education: educationCollection,
  career: careerCollection,
}
