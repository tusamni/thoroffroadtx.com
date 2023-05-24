import { z, defineCollection } from "astro:content";

const buildCollection = defineCollection({
    schema: z.object({
        // build
        id: z.number(),

        // vehicle
        year: z.number(),
        make: z.string(),
        model: z.union([z.string(), z.number()]),
        trim: z.string().optional().nullable(),
        color: z.string().optional(),
        drive: z.enum(["4x4", "4x2"]),

        // owner
        city: z.string().optional(),
        state: z.string().optional(),
        owner: z.string().optional(),
        highlight: z.string().optional(),
        testimonial: z.string().optional(),
        goals: z.string().optional(),
        parts: z.string().transform((part) => part.split(", ")),
        categories: z.string().transform((category) => category.split(", ")),

        // meta
        date: z.date(),
        path: z.string(),
        summary: z.string(),

        // images
        totalImages: z.number().transform((total) => Array.from({ length: total - 0 }, (_, i) => 0 + 1 + i)), // turn the total images into a array of the filenames
        featuredImage: z.number(),
        homepageFeatured: z.boolean().optional(),
        video: z.string().optional(),
    }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
    builds: buildCollection,
};
