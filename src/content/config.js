import { z, defineCollection } from "astro:content";

const buildCollection = defineCollection({
    schema: z.object({
        // build
        id: z.number(),
        path: z.string(),
        summary: z.string(),

        // vehcile meta
        year: z.number(),
        make: z.string(),
        model: z.union([z.string(), z.number()]),
        trim: z.string().optional().nullable(),
        drive: z.enum(["4x4", "4x2"]),
        color: z.string().optional(),

        // owner meta
        location: z.object({
            city: z.string(),
            state: z.string(),
        }),
        testimonial: z
            .object({
                name: z.string(),
                highlight: z.string(),
                content: z.string(),
            })
            .optional(),

        // meta
        date: z.date(),
        goals: z.string(),
        parts: z.string().array().nonempty(),

        // images
        images: z.number().array(),
        video: z.string().optional(),
    }),
});
// 3. Export a single `collections` object to register your collection(s)
export const collections = {
    builds: buildCollection,
};
