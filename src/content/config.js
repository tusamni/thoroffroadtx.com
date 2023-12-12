import { z, defineCollection, reference } from "astro:content";

const brandCollection = defineCollection({
    type: "data",
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        logo: z.string(),
        featured: z.boolean().default(false),
        parts: z.array(reference("parts")),
    })
})

const buildCollection = defineCollection({
    schema: z.object({
        draft: z.boolean().default(false),
        id: z.number(),
        date: z.date(),
        path: z.string(),
        summary: z.string(),
        categories: z.string().transform((category) => category.split(", ")),
        featured: z.boolean().optional(),
        related: z.array(z.string()).optional(),

        // vehicle
        year: z.number(),
        make: reference("makes"),
        model: reference("models"),
        trim: z.union([z.string(), z.number()]).optional().nullable(),
        color: z.string().optional(),
        drive: z.enum(["4x4", "4x2", "AWD"]),
        parts: z.string().transform((part) => part.split(", ")),

        // details
        testimonial: reference("testimonials").optional(),
        goals: z.string().optional(),

        // images
        images: z.object({
            total: z.number(),
            snippet: z.number().default(1),
            banner: z.number().default(1),
            featured: z.array(z.number()).optional(),
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
                id: z.number(),
                image: z.number(),
            }),
        }),
        testimonial: reference("testimonials")
    }),
});

const modelCollection = defineCollection({
    type: "data",
    schema: z.object({
        slug: z.string(),
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
                        id: z.number(),
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
                    id: z.number(),
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
