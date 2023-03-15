import { z, defineCollection } from 'astro:content';

const images = defineCollection({
    schema: z.object({
        yrmm: z.number(),
        year: z.number(),
        brand: z.string(),
        model: z.string(),
        trim: z.string().optional(),
        color: z.string().optional(),
        title: z.string(),
        description: z.string(),
        alt: z.string(),
        width: z.number(),
        height: z.number(),
    })
});

export const collections = {
    "images": images
};