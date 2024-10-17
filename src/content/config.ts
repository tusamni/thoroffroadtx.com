import { defineCollection, z } from 'astro:content';
import { cosmic } from "@/library/cosmic"

const brands = defineCollection({
	loader: async () => {
		const { objects: brands } = await cosmic.objects.find({ type: "brands" }).props(["id", "title", "metadata"]).depth(1).sort("title");

		return brands.map((brand) => ({
			id: brand.id,
			title: brand.title,
			...brand.metadata
		}));
	},
});

const builds = defineCollection({
	loader: async () => {
		const { objects: builds } = await cosmic.objects.find({ type: "builds" }).props(["id", "slug", "title", "metadata"]).depth(2).sort("-metadata.date");

		return builds.map((build) => ({
			id: build.slug,
			title: build.title,
			...build.metadata
		}));
	},
});

const makes = defineCollection({
	loader: async () => {
		const { objects: makes } = await cosmic.objects.find({ type: "makes" }).props(["id", "slug", "title", "metadata"]).sort("title");

		return makes.map((make) => ({
			id: make.slug,
			title: make.title,
			...make.metadata
		}));
	},
});


const media = defineCollection({
	loader: async () => {
		let allMedia = [];
		let skip = 0;
		const limit = 100;
		let hasMore = true;

		while (hasMore) {
			try {
				const response = await cosmic.media.find({ type: "image/jpeg" }).props(["name", "original_name", "folder", "url", "imgix_url", "width", "height", "alt_text"]).limit(limit).skip(skip);

				allMedia = allMedia.concat(response.media);

				// Check if there are more items to fetch
				if (response.media.length < limit) {
					hasMore = false;
				} else {
					skip += limit;
				}
			} catch (error) {
				console.error("Error fetching media:", error);
				hasMore = false;
			}
		}

		return allMedia.map((m) => ({
			id: m.name,
			name: m.original_name,
			nameBase: m.name.replace(/\.[^/.]+$/, ""),
			folder: m.folder,
			url: m.url,
			imgix_url: m.imgix_url,
			alt: m.alt_text,
			width: m.width,
			height: m.height
		}));
	}
})

const models = defineCollection({
	loader: async () => {
		const { objects: models } = await cosmic.objects.find({ type: "models" }).props(["id", "slug", "title", "metadata"]).depth(1).sort("title");

		return models.map((model) => ({
			id: model.slug,
			title: model.title,
			...model.metadata
		}));
	},
});

const parts = defineCollection({
	loader: async () => {
		const { objects: parts } = await cosmic.objects.find({ type: "parts" }).props(["id", "slug", "title", "metadata"]).sort("title");

		return parts.map((part) => ({
			id: part.slug,
			title: part.title,
			...part.metadata
		}));
	},
});

const testimonials = defineCollection({
	loader: async () => {
		const { objects: testimonials } = await cosmic.objects.find({ type: "testimonials" }).props(["id", "title", "metadata"]).sort("title");

		return testimonials.map((testimonial) => ({
			id: testimonial.id,
			title: testimonial.title,
			...testimonial.metadata
		}));
	},
});

export const collections = { brands, builds, makes, media, models, parts, testimonials };