import { z, defineCollection } from 'astro:content'

const biographyCollection = defineCollection({
    type: 'content',
})

const projectsCollection = defineCollection({
    type: 'data',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        src: z.string(),
        alt: z.string(),
        link: z.string(),
        technologies: z.array(
            z.object({
                name: z.string(),
                color: z.string(),
            })
        ),
    }),
})

export const collections = {
    biography: biographyCollection,
    projects: projectsCollection,
}
