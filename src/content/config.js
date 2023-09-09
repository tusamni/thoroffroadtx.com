import { z, defineCollection } from "astro:content";

const buildCollection = defineCollection({
    schema: z.object({
        // build
        id: z.number(),
        date: z.date(),
        path: z.string(),
        summary: z.string(),
        categories: z.string().transform((category) => category.split(", ")),
        featured: z.boolean().optional(),

        // vehicle
        year: z.number(),
        make: z.string(),
        model: z.union([z.string(), z.number()]),
        trim: z.string().optional().nullable(),
        color: z.string().optional(),
        drive: z.enum(["4x4", "4x2"]),
        parts: z.string().transform((part) => part.split(", ")),

        // details
        testimonial: z.string().optional(),
        goals: z.string().optional(),

        // images
        images: z.object({
            total: z.number(),
            snippet: z.number().default(1),
            banner: z.number().default(1),
        }),
        video: z.string().optional(),
    }),
});

const partsCollection = defineCollection({
    schema: z.object({
        // vehicle
        title: z.string(),
        heading: z.string(),
        descriptionShort: z.string(),
        descriptionLong: z.string(),
        contentSidebar: z.string().optional(),
        contentParts: z
            .array(
                z.object({
                    title: z.string(),
                    description: z.string().nullable(),
                })
            )
            .optional(),
        seoTitle: z.string(),
        seoDescription: z.string(),
        logo: z.string(),
        featured: z.string(),
        featuredAlt: z.string(),
    }),
});

const testimonialsCollection = defineCollection({
    schema: z.object({
        name: z.string(),
        highlight: z.string(),
        testimonial: z.string(),
    }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
    builds: buildCollection,
    parts: partsCollection,
    testimonials: testimonialsCollection,
};
