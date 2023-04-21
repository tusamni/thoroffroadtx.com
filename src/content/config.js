import { z, defineCollection } from "astro:content";

const buildCollection = defineCollection({
    schema: z.object({
        // build
        id: z.bigint(),
        path: z.string(),
        summary: z.string(),

        // vehcile meta
        year: z.bigint(),
        make: z.string(),
        model: z.string(),
        trim: z.string().optional(),
        drive: z.enum(["4x4", "4x2"]),
        color: z.string().optional(),
        
        // owner meta
        location: z.object({
            city: z.string(),
            state: z.string(),
        }),
name: Victor A.
testimonial:
    highlight: Slater was super helpful
    content: I ordered a full Carli kit for my truck and had to use THOR Off Road because they were the closest dealer. Even though they are 200 miles away, Slater was super helpful in helping me select the kit I wanted and working with me and the shipping company in coordinating delivery.

    }),
});
// 3. Export a single `collections` object to register your collection(s)
export const collections = {
    builds: buildCollection,
};
