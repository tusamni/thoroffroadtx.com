import { z, defineCollection, reference } from "astro:content";

const buildCollection = defineCollection({
	type: "data",
	schema: z.object({
		date: z.string().pipe(z.coerce.date()),
		categories: z.array(reference("parts")),
		related: z.array(reference("builds")).optional(),
		meta: z.object({
			year: z.number(),
			make: reference("makes"),
			model: reference("models"),
			trim: z.string().optional(),
			color: z.string().optional(),
			drive: z.enum(["4x4", "4x2", "AWD"]),
			parts: z.array(z.string()),
			goals: z.string().optional(),
			testimonial: reference("testimonials").optional(),
		}),
		images: z.object({
			total: z.number(),
			snippet: z.number().default(1),
			highlight: z.array(z.number()).length(2),
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

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
	builds: buildCollection,
};
