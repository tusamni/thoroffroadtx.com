import { z, defineCollection, reference } from "astro:content";

const brandCollection = defineCollection({
    type: "data",
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        logo: z.string(),
        featured: z.boolean().default(false),
        parts: z.array(reference("parts")),
    }),
});

const buildCollection = defineCollection({
    type: "data",
    schema: z.object({
        date: z.string().pipe(z.coerce.date()),
        summary: z.string(),
        categories: z.array(reference("parts")),
        related: z.array(reference("builds")).optional(),
        meta: z.object({
            year: z.number(),
            make: reference("makes"),
            model: reference("models"),
            trim: z.string().nullable().optional(),
            color: z.string().optional(),
            drive: z.enum(["4x4", "4x2", "AWD"]),
            parts: z.string().transform((part) => part.split(", ")),
            goals: z.string().optional(),
        }),
        images: z.object({
            total: z.number(),
            snippet: z.number().default(1),
            build: z.array(z.number()),
        }),
        video: z
            .object({
                filename: z.string(),
                width: z.number(),
                height: z.number(),
            })
            .optional(),
    }),
});

const makeCollection = defineCollection({
    type: "data",
    schema: z.object({
        title: z.string(),
        heading: z.string(),
        description: z.object({
            short: z.string(),
            long: z.string(),
            push: z.string(),
        }),
        models: z.array(reference("models")),
        seo: z.object({
            title: z.string(),
            description: z.string(),
        }),
        logo: z.object({
            name: z.string(),
            text: z.string(),
            bg: z.string(),
        }),
        images: z.object({
            featured: z.object({
                id: reference("builds"),
                headline: z.number(),
                secondary: z.array(z.number()).length(3),
            }),
        }),
        testimonial: reference("testimonials"),
    }),
});

const modelCollection = defineCollection({
    type: "data",
    schema: z.object({
        draft: z.boolean().optional(),
        title: z.string().or(z.number()),
        description: z.object({
            short: z.string(),
            long: z.string(),
        }),
        make: reference("makes"),
        images: z
            .object({
                featured: z
                    .object({
                        id: reference("builds"),
                        image: z.number(),
                    })
                    .optional(),
            })
            .optional(),
    }),
});

const partCollection = defineCollection({
    type: "data",
    schema: z.object({
        title: z.string(),
        heading: z.string(),
        description: z.object({
            short: z.string(),
            long: z.string(),
        }),
        content: z.object({
            sidebar: z.string().optional(),
            parts: z
                .array(
                    z.object({
                        title: z.string(),
                        description: z.string().nullable(),
                    })
                )
                .optional(),
        }),
        seo: z.object({
            title: z.string(),
            description: z.string(),
        }),
        images: z.object({
            icon: z.string(),
            featured: z.array(
                z.object({
                    id: reference("builds"),
                    image: z.number(),
                })
            ),
        }),
    }),
});

const testimonialCollection = defineCollection({
    type: "data",
    schema: z.object({
        name: z.string(),
        highlight: z.string(),
        testimonial: z.string(),
        featured: z
            .object({
                homepage: z.boolean().default(false),
            })
            .optional(),
    }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
    brands: brandCollection,
    builds: buildCollection,
    makes: makeCollection,
    models: modelCollection,
    parts: partCollection,
    testimonials: testimonialCollection,
};
