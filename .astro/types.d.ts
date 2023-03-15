declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}
declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]];

	export const image: () => import('astro/zod').ZodObject<{
		src: import('astro/zod').ZodString;
		width: import('astro/zod').ZodNumber;
		height: import('astro/zod').ZodNumber;
		format: import('astro/zod').ZodString;
	}>;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<S>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof typeof entryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		Required<ContentConfig['collections'][C]>['schema']
	>;

	const entryMap: {
		"images": {
"vehicles/can-am/defender/2111-2018-can-am-defender-red/2018-can-am-defender-red_001.mdx": {
  id: "vehicles/can-am/defender/2111-2018-can-am-defender-red/2018-can-am-defender-red_001.mdx",
  slug: "vehicles/can-am/defender/2111-2018-can-am-defender-red/2018-can-am-defender-red_001",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/can-am/defender/2111-2018-can-am-defender-red/2018-can-am-defender-red_002.mdx": {
  id: "vehicles/can-am/defender/2111-2018-can-am-defender-red/2018-can-am-defender-red_002.mdx",
  slug: "vehicles/can-am/defender/2111-2018-can-am-defender-red/2018-can-am-defender-red_002",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/can-am/defender/2111-2018-can-am-defender-red/2018-can-am-defender-red_003.mdx": {
  id: "vehicles/can-am/defender/2111-2018-can-am-defender-red/2018-can-am-defender-red_003.mdx",
  slug: "vehicles/can-am/defender/2111-2018-can-am-defender-red/2018-can-am-defender-red_003",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/can-am/defender/2111-2018-can-am-defender-red/2018-can-am-defender-red_004.mdx": {
  id: "vehicles/can-am/defender/2111-2018-can-am-defender-red/2018-can-am-defender-red_004.mdx",
  slug: "vehicles/can-am/defender/2111-2018-can-am-defender-red/2018-can-am-defender-red_004",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/can-am/defender/2111-2018-can-am-defender-red/2018-can-am-defender-red_005.mdx": {
  id: "vehicles/can-am/defender/2111-2018-can-am-defender-red/2018-can-am-defender-red_005.mdx",
  slug: "vehicles/can-am/defender/2111-2018-can-am-defender-red/2018-can-am-defender-red_005",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/can-am/defender/2111-2018-can-am-defender-red/2018-can-am-defender-red_006.mdx": {
  id: "vehicles/can-am/defender/2111-2018-can-am-defender-red/2018-can-am-defender-red_006.mdx",
  slug: "vehicles/can-am/defender/2111-2018-can-am-defender-red/2018-can-am-defender-red_006",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/can-am/defender/2111-2018-can-am-defender-red/2018-can-am-defender-red_007.mdx": {
  id: "vehicles/can-am/defender/2111-2018-can-am-defender-red/2018-can-am-defender-red_007.mdx",
  slug: "vehicles/can-am/defender/2111-2018-can-am-defender-red/2018-can-am-defender-red_007",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/can-am/defender/2111-2018-can-am-defender-red/2018-can-am-defender-red_008.mdx": {
  id: "vehicles/can-am/defender/2111-2018-can-am-defender-red/2018-can-am-defender-red_008.mdx",
  slug: "vehicles/can-am/defender/2111-2018-can-am-defender-red/2018-can-am-defender-red_008",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/can-am/defender/2111-2018-can-am-defender-red/2018-can-am-defender-red_009.mdx": {
  id: "vehicles/can-am/defender/2111-2018-can-am-defender-red/2018-can-am-defender-red_009.mdx",
  slug: "vehicles/can-am/defender/2111-2018-can-am-defender-red/2018-can-am-defender-red_009",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/can-am/defender/2111-2018-can-am-defender-red/2018-can-am-defender-red_010.mdx": {
  id: "vehicles/can-am/defender/2111-2018-can-am-defender-red/2018-can-am-defender-red_010.mdx",
  slug: "vehicles/can-am/defender/2111-2018-can-am-defender-red/2018-can-am-defender-red_010",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/can-am/defender/2111-2018-can-am-defender-red/2018-can-am-defender-red_011.mdx": {
  id: "vehicles/can-am/defender/2111-2018-can-am-defender-red/2018-can-am-defender-red_011.mdx",
  slug: "vehicles/can-am/defender/2111-2018-can-am-defender-red/2018-can-am-defender-red_011",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/can-am/defender/2111-2018-can-am-defender-red/2018-can-am-defender-red_012.mdx": {
  id: "vehicles/can-am/defender/2111-2018-can-am-defender-red/2018-can-am-defender-red_012.mdx",
  slug: "vehicles/can-am/defender/2111-2018-can-am-defender-red/2018-can-am-defender-red_012",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/can-am/defender/2111-2018-can-am-defender-red/2018-can-am-defender-red_013.mdx": {
  id: "vehicles/can-am/defender/2111-2018-can-am-defender-red/2018-can-am-defender-red_013.mdx",
  slug: "vehicles/can-am/defender/2111-2018-can-am-defender-red/2018-can-am-defender-red_013",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/chevrolet/colorado/2110-2020-chevrolet-colorado-red/2020-chevrolet-colorado-red_001.mdx": {
  id: "vehicles/chevrolet/colorado/2110-2020-chevrolet-colorado-red/2020-chevrolet-colorado-red_001.mdx",
  slug: "vehicles/chevrolet/colorado/2110-2020-chevrolet-colorado-red/2020-chevrolet-colorado-red_001",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/chevrolet/colorado/2110-2020-chevrolet-colorado-red/2020-chevrolet-colorado-red_002.mdx": {
  id: "vehicles/chevrolet/colorado/2110-2020-chevrolet-colorado-red/2020-chevrolet-colorado-red_002.mdx",
  slug: "vehicles/chevrolet/colorado/2110-2020-chevrolet-colorado-red/2020-chevrolet-colorado-red_002",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/chevrolet/colorado/2110-2020-chevrolet-colorado-red/2020-chevrolet-colorado-red_003.mdx": {
  id: "vehicles/chevrolet/colorado/2110-2020-chevrolet-colorado-red/2020-chevrolet-colorado-red_003.mdx",
  slug: "vehicles/chevrolet/colorado/2110-2020-chevrolet-colorado-red/2020-chevrolet-colorado-red_003",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/chevrolet/colorado/2110-2020-chevrolet-colorado-red/2020-chevrolet-colorado-red_004.mdx": {
  id: "vehicles/chevrolet/colorado/2110-2020-chevrolet-colorado-red/2020-chevrolet-colorado-red_004.mdx",
  slug: "vehicles/chevrolet/colorado/2110-2020-chevrolet-colorado-red/2020-chevrolet-colorado-red_004",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/chevrolet/colorado/2110-2020-chevrolet-colorado-red/2020-chevrolet-colorado-red_005.mdx": {
  id: "vehicles/chevrolet/colorado/2110-2020-chevrolet-colorado-red/2020-chevrolet-colorado-red_005.mdx",
  slug: "vehicles/chevrolet/colorado/2110-2020-chevrolet-colorado-red/2020-chevrolet-colorado-red_005",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/chevrolet/colorado/2110-2020-chevrolet-colorado-red/2020-chevrolet-colorado-red_006.mdx": {
  id: "vehicles/chevrolet/colorado/2110-2020-chevrolet-colorado-red/2020-chevrolet-colorado-red_006.mdx",
  slug: "vehicles/chevrolet/colorado/2110-2020-chevrolet-colorado-red/2020-chevrolet-colorado-red_006",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/chevrolet/colorado/2110-2020-chevrolet-colorado-red/2020-chevrolet-colorado-red_007.mdx": {
  id: "vehicles/chevrolet/colorado/2110-2020-chevrolet-colorado-red/2020-chevrolet-colorado-red_007.mdx",
  slug: "vehicles/chevrolet/colorado/2110-2020-chevrolet-colorado-red/2020-chevrolet-colorado-red_007",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_001.mdx": {
  id: "vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_001.mdx",
  slug: "vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_001",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_002.mdx": {
  id: "vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_002.mdx",
  slug: "vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_002",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_003.mdx": {
  id: "vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_003.mdx",
  slug: "vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_003",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_004.mdx": {
  id: "vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_004.mdx",
  slug: "vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_004",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_005.mdx": {
  id: "vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_005.mdx",
  slug: "vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_005",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_006.mdx": {
  id: "vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_006.mdx",
  slug: "vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_006",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_007.mdx": {
  id: "vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_007.mdx",
  slug: "vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_007",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_008.mdx": {
  id: "vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_008.mdx",
  slug: "vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_008",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_009.mdx": {
  id: "vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_009.mdx",
  slug: "vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_009",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_010.mdx": {
  id: "vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_010.mdx",
  slug: "vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_010",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_011.mdx": {
  id: "vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_011.mdx",
  slug: "vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_011",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_012.mdx": {
  id: "vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_012.mdx",
  slug: "vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_012",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_013.mdx": {
  id: "vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_013.mdx",
  slug: "vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_013",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_014.mdx": {
  id: "vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_014.mdx",
  slug: "vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_014",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_015.mdx": {
  id: "vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_015.mdx",
  slug: "vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_015",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_016.mdx": {
  id: "vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_016.mdx",
  slug: "vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_016",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_017.mdx": {
  id: "vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_017.mdx",
  slug: "vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_017",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_018.mdx": {
  id: "vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_018.mdx",
  slug: "vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_018",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_019.mdx": {
  id: "vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_019.mdx",
  slug: "vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_019",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_020.mdx": {
  id: "vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_020.mdx",
  slug: "vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_020",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_021.mdx": {
  id: "vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_021.mdx",
  slug: "vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_021",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_022.mdx": {
  id: "vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_022.mdx",
  slug: "vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_022",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_023.mdx": {
  id: "vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_023.mdx",
  slug: "vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_023",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_024.mdx": {
  id: "vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_024.mdx",
  slug: "vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_024",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_025.mdx": {
  id: "vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_025.mdx",
  slug: "vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_025",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_026.mdx": {
  id: "vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_026.mdx",
  slug: "vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-oxford-white_026",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/bronco/2204-2021-ford-bronco-outer-banks-black/2021-ford-bronco-black_001.mdx": {
  id: "vehicles/ford/bronco/2204-2021-ford-bronco-outer-banks-black/2021-ford-bronco-black_001.mdx",
  slug: "vehicles/ford/bronco/2204-2021-ford-bronco-outer-banks-black/2021-ford-bronco-black_001",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/bronco/2204-2021-ford-bronco-outer-banks-black/2021-ford-bronco-black_002.mdx": {
  id: "vehicles/ford/bronco/2204-2021-ford-bronco-outer-banks-black/2021-ford-bronco-black_002.mdx",
  slug: "vehicles/ford/bronco/2204-2021-ford-bronco-outer-banks-black/2021-ford-bronco-black_002",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/bronco/2204-2021-ford-bronco-outer-banks-black/2021-ford-bronco-black_003.mdx": {
  id: "vehicles/ford/bronco/2204-2021-ford-bronco-outer-banks-black/2021-ford-bronco-black_003.mdx",
  slug: "vehicles/ford/bronco/2204-2021-ford-bronco-outer-banks-black/2021-ford-bronco-black_003",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/bronco/2204-2021-ford-bronco-outer-banks-black/2021-ford-bronco-black_004.mdx": {
  id: "vehicles/ford/bronco/2204-2021-ford-bronco-outer-banks-black/2021-ford-bronco-black_004.mdx",
  slug: "vehicles/ford/bronco/2204-2021-ford-bronco-outer-banks-black/2021-ford-bronco-black_004",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_001.mdx": {
  id: "vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_001.mdx",
  slug: "vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_001",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_002.mdx": {
  id: "vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_002.mdx",
  slug: "vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_002",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_003.mdx": {
  id: "vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_003.mdx",
  slug: "vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_003",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_004.mdx": {
  id: "vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_004.mdx",
  slug: "vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_004",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_005.mdx": {
  id: "vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_005.mdx",
  slug: "vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_005",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_006.mdx": {
  id: "vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_006.mdx",
  slug: "vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_006",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_007.mdx": {
  id: "vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_007.mdx",
  slug: "vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_007",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_008.mdx": {
  id: "vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_008.mdx",
  slug: "vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_008",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_009.mdx": {
  id: "vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_009.mdx",
  slug: "vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_009",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_010.mdx": {
  id: "vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_010.mdx",
  slug: "vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_010",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_011.mdx": {
  id: "vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_011.mdx",
  slug: "vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_011",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_012.mdx": {
  id: "vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_012.mdx",
  slug: "vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_012",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_013.mdx": {
  id: "vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_013.mdx",
  slug: "vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_013",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_014.mdx": {
  id: "vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_014.mdx",
  slug: "vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_014",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_015.mdx": {
  id: "vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_015.mdx",
  slug: "vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_015",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_016.mdx": {
  id: "vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_016.mdx",
  slug: "vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_016",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_017.mdx": {
  id: "vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_017.mdx",
  slug: "vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_017",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_018.mdx": {
  id: "vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_018.mdx",
  slug: "vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_018",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_019.mdx": {
  id: "vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_019.mdx",
  slug: "vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_019",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_020.mdx": {
  id: "vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_020.mdx",
  slug: "vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_020",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_021.mdx": {
  id: "vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_021.mdx",
  slug: "vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_021",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_022.mdx": {
  id: "vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_022.mdx",
  slug: "vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_022",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_023.mdx": {
  id: "vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_023.mdx",
  slug: "vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_023",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_024.mdx": {
  id: "vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_024.mdx",
  slug: "vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-antimatter-blue_024",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-150/2107-2021-ford-f-150-platinum-silver/2021-ford-f-150-silver_001.mdx": {
  id: "vehicles/ford/f-150/2107-2021-ford-f-150-platinum-silver/2021-ford-f-150-silver_001.mdx",
  slug: "vehicles/ford/f-150/2107-2021-ford-f-150-platinum-silver/2021-ford-f-150-silver_001",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-150/2107-2021-ford-f-150-platinum-silver/2021-ford-f-150-silver_002.mdx": {
  id: "vehicles/ford/f-150/2107-2021-ford-f-150-platinum-silver/2021-ford-f-150-silver_002.mdx",
  slug: "vehicles/ford/f-150/2107-2021-ford-f-150-platinum-silver/2021-ford-f-150-silver_002",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-150/2107-2021-ford-f-150-platinum-silver/2021-ford-f-150-silver_003.mdx": {
  id: "vehicles/ford/f-150/2107-2021-ford-f-150-platinum-silver/2021-ford-f-150-silver_003.mdx",
  slug: "vehicles/ford/f-150/2107-2021-ford-f-150-platinum-silver/2021-ford-f-150-silver_003",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-150/2107-2021-ford-f-150-platinum-silver/2021-ford-f-150-silver_004.mdx": {
  id: "vehicles/ford/f-150/2107-2021-ford-f-150-platinum-silver/2021-ford-f-150-silver_004.mdx",
  slug: "vehicles/ford/f-150/2107-2021-ford-f-150-platinum-silver/2021-ford-f-150-silver_004",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-150/2107-2021-ford-f-150-platinum-silver/2021-ford-f-150-silver_005.mdx": {
  id: "vehicles/ford/f-150/2107-2021-ford-f-150-platinum-silver/2021-ford-f-150-silver_005.mdx",
  slug: "vehicles/ford/f-150/2107-2021-ford-f-150-platinum-silver/2021-ford-f-150-silver_005",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-150/2107-2021-ford-f-150-platinum-silver/2021-ford-f-150-silver_006.mdx": {
  id: "vehicles/ford/f-150/2107-2021-ford-f-150-platinum-silver/2021-ford-f-150-silver_006.mdx",
  slug: "vehicles/ford/f-150/2107-2021-ford-f-150-platinum-silver/2021-ford-f-150-silver_006",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-150/2107-2021-ford-f-150-platinum-silver/2021-ford-f-150-silver_007.mdx": {
  id: "vehicles/ford/f-150/2107-2021-ford-f-150-platinum-silver/2021-ford-f-150-silver_007.mdx",
  slug: "vehicles/ford/f-150/2107-2021-ford-f-150-platinum-silver/2021-ford-f-150-silver_007",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-150/2107-2021-ford-f-150-platinum-silver/2021-ford-f-150-silver_008.mdx": {
  id: "vehicles/ford/f-150/2107-2021-ford-f-150-platinum-silver/2021-ford-f-150-silver_008.mdx",
  slug: "vehicles/ford/f-150/2107-2021-ford-f-150-platinum-silver/2021-ford-f-150-silver_008",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-150/2107-2021-ford-f-150-platinum-silver/2021-ford-f-150-silver_009.mdx": {
  id: "vehicles/ford/f-150/2107-2021-ford-f-150-platinum-silver/2021-ford-f-150-silver_009.mdx",
  slug: "vehicles/ford/f-150/2107-2021-ford-f-150-platinum-silver/2021-ford-f-150-silver_009",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-150/2107-2021-ford-f-150-platinum-silver/2021-ford-f-150-silver_010.mdx": {
  id: "vehicles/ford/f-150/2107-2021-ford-f-150-platinum-silver/2021-ford-f-150-silver_010.mdx",
  slug: "vehicles/ford/f-150/2107-2021-ford-f-150-platinum-silver/2021-ford-f-150-silver_010",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-150/2107-2021-ford-f-150-platinum-silver/2021-ford-f-150-silver_011.mdx": {
  id: "vehicles/ford/f-150/2107-2021-ford-f-150-platinum-silver/2021-ford-f-150-silver_011.mdx",
  slug: "vehicles/ford/f-150/2107-2021-ford-f-150-platinum-silver/2021-ford-f-150-silver_011",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-150/2107-2021-ford-f-150-platinum-silver/2021-ford-f-150-silver_012.mdx": {
  id: "vehicles/ford/f-150/2107-2021-ford-f-150-platinum-silver/2021-ford-f-150-silver_012.mdx",
  slug: "vehicles/ford/f-150/2107-2021-ford-f-150-platinum-silver/2021-ford-f-150-silver_012",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-150/2107-2021-ford-f-150-platinum-silver/2021-ford-f-150-silver_013.mdx": {
  id: "vehicles/ford/f-150/2107-2021-ford-f-150-platinum-silver/2021-ford-f-150-silver_013.mdx",
  slug: "vehicles/ford/f-150/2107-2021-ford-f-150-platinum-silver/2021-ford-f-150-silver_013",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-150/2107-2021-ford-f-150-platinum-silver/2021-ford-f-150-silver_014.mdx": {
  id: "vehicles/ford/f-150/2107-2021-ford-f-150-platinum-silver/2021-ford-f-150-silver_014.mdx",
  slug: "vehicles/ford/f-150/2107-2021-ford-f-150-platinum-silver/2021-ford-f-150-silver_014",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-150/2107-2021-ford-f-150-platinum-silver/2021-ford-f-150-silver_015.mdx": {
  id: "vehicles/ford/f-150/2107-2021-ford-f-150-platinum-silver/2021-ford-f-150-silver_015.mdx",
  slug: "vehicles/ford/f-150/2107-2021-ford-f-150-platinum-silver/2021-ford-f-150-silver_015",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_001.mdx": {
  id: "vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_001.mdx",
  slug: "vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_001",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_002.mdx": {
  id: "vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_002.mdx",
  slug: "vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_002",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_003.mdx": {
  id: "vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_003.mdx",
  slug: "vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_003",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_004.mdx": {
  id: "vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_004.mdx",
  slug: "vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_004",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_005.mdx": {
  id: "vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_005.mdx",
  slug: "vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_005",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_006.mdx": {
  id: "vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_006.mdx",
  slug: "vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_006",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_007.mdx": {
  id: "vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_007.mdx",
  slug: "vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_007",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_008.mdx": {
  id: "vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_008.mdx",
  slug: "vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_008",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_009.mdx": {
  id: "vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_009.mdx",
  slug: "vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_009",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_010.mdx": {
  id: "vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_010.mdx",
  slug: "vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_010",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_011.mdx": {
  id: "vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_011.mdx",
  slug: "vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_011",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_012.mdx": {
  id: "vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_012.mdx",
  slug: "vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_012",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_013.mdx": {
  id: "vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_013.mdx",
  slug: "vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_013",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_014.mdx": {
  id: "vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_014.mdx",
  slug: "vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_014",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_015.mdx": {
  id: "vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_015.mdx",
  slug: "vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_015",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_016.mdx": {
  id: "vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_016.mdx",
  slug: "vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_016",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_017.mdx": {
  id: "vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_017.mdx",
  slug: "vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_017",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_018.mdx": {
  id: "vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_018.mdx",
  slug: "vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_018",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_019.mdx": {
  id: "vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_019.mdx",
  slug: "vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_019",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_020.mdx": {
  id: "vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_020.mdx",
  slug: "vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_020",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_021.mdx": {
  id: "vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_021.mdx",
  slug: "vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_021",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_022.mdx": {
  id: "vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_022.mdx",
  slug: "vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_022",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_023.mdx": {
  id: "vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_023.mdx",
  slug: "vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_023",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_024.mdx": {
  id: "vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_024.mdx",
  slug: "vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_024",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_025.mdx": {
  id: "vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_025.mdx",
  slug: "vehicles/ford/f-150/2109-2021-ford-f-150-lariat-silver/2021-ford-f-150-silver_025",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-150/2109-2021-ford-f-150-xlt-silver/2021-ford-f-150-silver_001.mdx": {
  id: "vehicles/ford/f-150/2109-2021-ford-f-150-xlt-silver/2021-ford-f-150-silver_001.mdx",
  slug: "vehicles/ford/f-150/2109-2021-ford-f-150-xlt-silver/2021-ford-f-150-silver_001",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-150/2109-2021-ford-f-150-xlt-silver/2021-ford-f-150-silver_002.mdx": {
  id: "vehicles/ford/f-150/2109-2021-ford-f-150-xlt-silver/2021-ford-f-150-silver_002.mdx",
  slug: "vehicles/ford/f-150/2109-2021-ford-f-150-xlt-silver/2021-ford-f-150-silver_002",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-150/2109-2021-ford-f-150-xlt-silver/2021-ford-f-150-silver_003.mdx": {
  id: "vehicles/ford/f-150/2109-2021-ford-f-150-xlt-silver/2021-ford-f-150-silver_003.mdx",
  slug: "vehicles/ford/f-150/2109-2021-ford-f-150-xlt-silver/2021-ford-f-150-silver_003",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-150/2109-2021-ford-f-150-xlt-silver/2021-ford-f-150-silver_004.mdx": {
  id: "vehicles/ford/f-150/2109-2021-ford-f-150-xlt-silver/2021-ford-f-150-silver_004.mdx",
  slug: "vehicles/ford/f-150/2109-2021-ford-f-150-xlt-silver/2021-ford-f-150-silver_004",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-150/2109-2021-ford-f-150-xlt-silver/2021-ford-f-150-silver_005.mdx": {
  id: "vehicles/ford/f-150/2109-2021-ford-f-150-xlt-silver/2021-ford-f-150-silver_005.mdx",
  slug: "vehicles/ford/f-150/2109-2021-ford-f-150-xlt-silver/2021-ford-f-150-silver_005",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-150/2109-2021-ford-f-150-xlt-silver/2021-ford-f-150-silver_006.mdx": {
  id: "vehicles/ford/f-150/2109-2021-ford-f-150-xlt-silver/2021-ford-f-150-silver_006.mdx",
  slug: "vehicles/ford/f-150/2109-2021-ford-f-150-xlt-silver/2021-ford-f-150-silver_006",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-150/2109-2021-ford-f-150-xlt-silver/2021-ford-f-150-silver_007.mdx": {
  id: "vehicles/ford/f-150/2109-2021-ford-f-150-xlt-silver/2021-ford-f-150-silver_007.mdx",
  slug: "vehicles/ford/f-150/2109-2021-ford-f-150-xlt-silver/2021-ford-f-150-silver_007",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-150/2109-2021-ford-f-150-xlt-silver/2021-ford-f-150-silver_008.mdx": {
  id: "vehicles/ford/f-150/2109-2021-ford-f-150-xlt-silver/2021-ford-f-150-silver_008.mdx",
  slug: "vehicles/ford/f-150/2109-2021-ford-f-150-xlt-silver/2021-ford-f-150-silver_008",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-250/2110-2021-ford-f-250-lariat-black/2021-ford-f-250-black_001.mdx": {
  id: "vehicles/ford/f-250/2110-2021-ford-f-250-lariat-black/2021-ford-f-250-black_001.mdx",
  slug: "vehicles/ford/f-250/2110-2021-ford-f-250-lariat-black/2021-ford-f-250-black_001",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-250/2110-2021-ford-f-250-lariat-black/2021-ford-f-250-black_002.mdx": {
  id: "vehicles/ford/f-250/2110-2021-ford-f-250-lariat-black/2021-ford-f-250-black_002.mdx",
  slug: "vehicles/ford/f-250/2110-2021-ford-f-250-lariat-black/2021-ford-f-250-black_002",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-250/2110-2021-ford-f-250-lariat-black/2021-ford-f-250-black_003.mdx": {
  id: "vehicles/ford/f-250/2110-2021-ford-f-250-lariat-black/2021-ford-f-250-black_003.mdx",
  slug: "vehicles/ford/f-250/2110-2021-ford-f-250-lariat-black/2021-ford-f-250-black_003",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-250/2110-2021-ford-f-250-lariat-black/2021-ford-f-250-black_004.mdx": {
  id: "vehicles/ford/f-250/2110-2021-ford-f-250-lariat-black/2021-ford-f-250-black_004.mdx",
  slug: "vehicles/ford/f-250/2110-2021-ford-f-250-lariat-black/2021-ford-f-250-black_004",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-250/2110-2021-ford-f-250-lariat-black/2021-ford-f-250-black_005.mdx": {
  id: "vehicles/ford/f-250/2110-2021-ford-f-250-lariat-black/2021-ford-f-250-black_005.mdx",
  slug: "vehicles/ford/f-250/2110-2021-ford-f-250-lariat-black/2021-ford-f-250-black_005",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-250/2110-2021-ford-f-250-lariat-black/2021-ford-f-250-black_006.mdx": {
  id: "vehicles/ford/f-250/2110-2021-ford-f-250-lariat-black/2021-ford-f-250-black_006.mdx",
  slug: "vehicles/ford/f-250/2110-2021-ford-f-250-lariat-black/2021-ford-f-250-black_006",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-250/2110-2021-ford-f-250-lariat-black/2021-ford-f-250-black_007.mdx": {
  id: "vehicles/ford/f-250/2110-2021-ford-f-250-lariat-black/2021-ford-f-250-black_007.mdx",
  slug: "vehicles/ford/f-250/2110-2021-ford-f-250-lariat-black/2021-ford-f-250-black_007",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-250/2110-2021-ford-f-250-lariat-lithium-grey/2021-ford-f-250-lithium-grey_001.mdx": {
  id: "vehicles/ford/f-250/2110-2021-ford-f-250-lariat-lithium-grey/2021-ford-f-250-lithium-grey_001.mdx",
  slug: "vehicles/ford/f-250/2110-2021-ford-f-250-lariat-lithium-grey/2021-ford-f-250-lithium-grey_001",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-250/2110-2021-ford-f-250-lariat-lithium-grey/2021-ford-f-250-lithium-grey_002.mdx": {
  id: "vehicles/ford/f-250/2110-2021-ford-f-250-lariat-lithium-grey/2021-ford-f-250-lithium-grey_002.mdx",
  slug: "vehicles/ford/f-250/2110-2021-ford-f-250-lariat-lithium-grey/2021-ford-f-250-lithium-grey_002",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-250/2110-2021-ford-f-250-lariat-lithium-grey/2021-ford-f-250-lithium-grey_003.mdx": {
  id: "vehicles/ford/f-250/2110-2021-ford-f-250-lariat-lithium-grey/2021-ford-f-250-lithium-grey_003.mdx",
  slug: "vehicles/ford/f-250/2110-2021-ford-f-250-lariat-lithium-grey/2021-ford-f-250-lithium-grey_003",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-250/2110-2021-ford-f-250-lariat-lithium-grey/2021-ford-f-250-lithium-grey_004.mdx": {
  id: "vehicles/ford/f-250/2110-2021-ford-f-250-lariat-lithium-grey/2021-ford-f-250-lithium-grey_004.mdx",
  slug: "vehicles/ford/f-250/2110-2021-ford-f-250-lariat-lithium-grey/2021-ford-f-250-lithium-grey_004",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-250/2110-2021-ford-f-250-lariat-lithium-grey/2021-ford-f-250-lithium-grey_005.mdx": {
  id: "vehicles/ford/f-250/2110-2021-ford-f-250-lariat-lithium-grey/2021-ford-f-250-lithium-grey_005.mdx",
  slug: "vehicles/ford/f-250/2110-2021-ford-f-250-lariat-lithium-grey/2021-ford-f-250-lithium-grey_005",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-250/2110-2021-ford-f-250-lariat-lithium-grey/2021-ford-f-250-lithium-grey_006.mdx": {
  id: "vehicles/ford/f-250/2110-2021-ford-f-250-lariat-lithium-grey/2021-ford-f-250-lithium-grey_006.mdx",
  slug: "vehicles/ford/f-250/2110-2021-ford-f-250-lariat-lithium-grey/2021-ford-f-250-lithium-grey_006",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-250/2110-2021-ford-f-250-lariat-lithium-grey/2021-ford-f-250-lithium-grey_007.mdx": {
  id: "vehicles/ford/f-250/2110-2021-ford-f-250-lariat-lithium-grey/2021-ford-f-250-lithium-grey_007.mdx",
  slug: "vehicles/ford/f-250/2110-2021-ford-f-250-lariat-lithium-grey/2021-ford-f-250-lithium-grey_007",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-250/2110-2021-ford-f-250-lariat-lithium-grey/2021-ford-f-250-lithium-grey_008.mdx": {
  id: "vehicles/ford/f-250/2110-2021-ford-f-250-lariat-lithium-grey/2021-ford-f-250-lithium-grey_008.mdx",
  slug: "vehicles/ford/f-250/2110-2021-ford-f-250-lariat-lithium-grey/2021-ford-f-250-lithium-grey_008",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-250/2110-2021-ford-f-250-lariat-lithium-grey/2021-ford-f-250-lithium-grey_009.mdx": {
  id: "vehicles/ford/f-250/2110-2021-ford-f-250-lariat-lithium-grey/2021-ford-f-250-lithium-grey_009.mdx",
  slug: "vehicles/ford/f-250/2110-2021-ford-f-250-lariat-lithium-grey/2021-ford-f-250-lithium-grey_009",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-250/2110-2021-ford-f-250-lariat-lithium-grey/2021-ford-f-250-lithium-grey_010.mdx": {
  id: "vehicles/ford/f-250/2110-2021-ford-f-250-lariat-lithium-grey/2021-ford-f-250-lithium-grey_010.mdx",
  slug: "vehicles/ford/f-250/2110-2021-ford-f-250-lariat-lithium-grey/2021-ford-f-250-lithium-grey_010",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-250/2110-2021-ford-f-250-lariat-lithium-grey/2021-ford-f-250-lithium-grey_011.mdx": {
  id: "vehicles/ford/f-250/2110-2021-ford-f-250-lariat-lithium-grey/2021-ford-f-250-lithium-grey_011.mdx",
  slug: "vehicles/ford/f-250/2110-2021-ford-f-250-lariat-lithium-grey/2021-ford-f-250-lithium-grey_011",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-250/2110-2021-ford-f-250-lariat-lithium-grey/2021-ford-f-250-lithium-grey_012.mdx": {
  id: "vehicles/ford/f-250/2110-2021-ford-f-250-lariat-lithium-grey/2021-ford-f-250-lithium-grey_012.mdx",
  slug: "vehicles/ford/f-250/2110-2021-ford-f-250-lariat-lithium-grey/2021-ford-f-250-lithium-grey_012",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-250/2110-2021-ford-f-250-lariat-lithium-grey/2021-ford-f-250-lithium-grey_013.mdx": {
  id: "vehicles/ford/f-250/2110-2021-ford-f-250-lariat-lithium-grey/2021-ford-f-250-lithium-grey_013.mdx",
  slug: "vehicles/ford/f-250/2110-2021-ford-f-250-lariat-lithium-grey/2021-ford-f-250-lithium-grey_013",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-250/2203-1997-ford-f-250-red/1997-ford-f-250-red_001.mdx": {
  id: "vehicles/ford/f-250/2203-1997-ford-f-250-red/1997-ford-f-250-red_001.mdx",
  slug: "vehicles/ford/f-250/2203-1997-ford-f-250-red/1997-ford-f-250-red_001",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-250/2203-1997-ford-f-250-red/1997-ford-f-250-red_002.mdx": {
  id: "vehicles/ford/f-250/2203-1997-ford-f-250-red/1997-ford-f-250-red_002.mdx",
  slug: "vehicles/ford/f-250/2203-1997-ford-f-250-red/1997-ford-f-250-red_002",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-250/2203-1997-ford-f-250-red/1997-ford-f-250-red_003.mdx": {
  id: "vehicles/ford/f-250/2203-1997-ford-f-250-red/1997-ford-f-250-red_003.mdx",
  slug: "vehicles/ford/f-250/2203-1997-ford-f-250-red/1997-ford-f-250-red_003",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-250/2203-1997-ford-f-250-red/1997-ford-f-250-red_004.mdx": {
  id: "vehicles/ford/f-250/2203-1997-ford-f-250-red/1997-ford-f-250-red_004.mdx",
  slug: "vehicles/ford/f-250/2203-1997-ford-f-250-red/1997-ford-f-250-red_004",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-250/2203-1997-ford-f-250-red/1997-ford-f-250-red_005.mdx": {
  id: "vehicles/ford/f-250/2203-1997-ford-f-250-red/1997-ford-f-250-red_005.mdx",
  slug: "vehicles/ford/f-250/2203-1997-ford-f-250-red/1997-ford-f-250-red_005",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-250/2204-2016-ford-f-250-white/2016-ford-f-250-white_001.mdx": {
  id: "vehicles/ford/f-250/2204-2016-ford-f-250-white/2016-ford-f-250-white_001.mdx",
  slug: "vehicles/ford/f-250/2204-2016-ford-f-250-white/2016-ford-f-250-white_001",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-250/2204-2016-ford-f-250-white/2016-ford-f-250-white_002.mdx": {
  id: "vehicles/ford/f-250/2204-2016-ford-f-250-white/2016-ford-f-250-white_002.mdx",
  slug: "vehicles/ford/f-250/2204-2016-ford-f-250-white/2016-ford-f-250-white_002",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-250/2204-2016-ford-f-250-white/2016-ford-f-250-white_003.mdx": {
  id: "vehicles/ford/f-250/2204-2016-ford-f-250-white/2016-ford-f-250-white_003.mdx",
  slug: "vehicles/ford/f-250/2204-2016-ford-f-250-white/2016-ford-f-250-white_003",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-250/2204-2016-ford-f-250-white/2016-ford-f-250-white_004.mdx": {
  id: "vehicles/ford/f-250/2204-2016-ford-f-250-white/2016-ford-f-250-white_004.mdx",
  slug: "vehicles/ford/f-250/2204-2016-ford-f-250-white/2016-ford-f-250-white_004",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-250/2204-2016-ford-f-250-white/2016-ford-f-250-white_005.mdx": {
  id: "vehicles/ford/f-250/2204-2016-ford-f-250-white/2016-ford-f-250-white_005.mdx",
  slug: "vehicles/ford/f-250/2204-2016-ford-f-250-white/2016-ford-f-250-white_005",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-250/2204-2016-ford-f-250-white/2016-ford-f-250-white_006.mdx": {
  id: "vehicles/ford/f-250/2204-2016-ford-f-250-white/2016-ford-f-250-white_006.mdx",
  slug: "vehicles/ford/f-250/2204-2016-ford-f-250-white/2016-ford-f-250-white_006",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-250/2204-2016-ford-f-250-white/2016-ford-f-250-white_007.mdx": {
  id: "vehicles/ford/f-250/2204-2016-ford-f-250-white/2016-ford-f-250-white_007.mdx",
  slug: "vehicles/ford/f-250/2204-2016-ford-f-250-white/2016-ford-f-250-white_007",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-250/2204-2016-ford-f-250-white/2016-ford-f-250-white_008.mdx": {
  id: "vehicles/ford/f-250/2204-2016-ford-f-250-white/2016-ford-f-250-white_008.mdx",
  slug: "vehicles/ford/f-250/2204-2016-ford-f-250-white/2016-ford-f-250-white_008",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-250/2204-2016-ford-f-250-white/2016-ford-f-250-white_009.mdx": {
  id: "vehicles/ford/f-250/2204-2016-ford-f-250-white/2016-ford-f-250-white_009.mdx",
  slug: "vehicles/ford/f-250/2204-2016-ford-f-250-white/2016-ford-f-250-white_009",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-250/2204-2016-ford-f-250-white/2016-ford-f-250-white_010.mdx": {
  id: "vehicles/ford/f-250/2204-2016-ford-f-250-white/2016-ford-f-250-white_010.mdx",
  slug: "vehicles/ford/f-250/2204-2016-ford-f-250-white/2016-ford-f-250-white_010",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-250/2204-2016-ford-f-250-white/2016-ford-f-250-white_011.mdx": {
  id: "vehicles/ford/f-250/2204-2016-ford-f-250-white/2016-ford-f-250-white_011.mdx",
  slug: "vehicles/ford/f-250/2204-2016-ford-f-250-white/2016-ford-f-250-white_011",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-250/2204-2016-ford-f-250-white/2016-ford-f-250-white_012.mdx": {
  id: "vehicles/ford/f-250/2204-2016-ford-f-250-white/2016-ford-f-250-white_012.mdx",
  slug: "vehicles/ford/f-250/2204-2016-ford-f-250-white/2016-ford-f-250-white_012",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-250/2204-2016-ford-f-250-white/2016-ford-f-250-white_013.mdx": {
  id: "vehicles/ford/f-250/2204-2016-ford-f-250-white/2016-ford-f-250-white_013.mdx",
  slug: "vehicles/ford/f-250/2204-2016-ford-f-250-white/2016-ford-f-250-white_013",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-250/2204-2016-ford-f-250-white/2016-ford-f-250-white_014.mdx": {
  id: "vehicles/ford/f-250/2204-2016-ford-f-250-white/2016-ford-f-250-white_014.mdx",
  slug: "vehicles/ford/f-250/2204-2016-ford-f-250-white/2016-ford-f-250-white_014",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-250/2204-2016-ford-f-250-white/2016-ford-f-250-white_015.mdx": {
  id: "vehicles/ford/f-250/2204-2016-ford-f-250-white/2016-ford-f-250-white_015.mdx",
  slug: "vehicles/ford/f-250/2204-2016-ford-f-250-white/2016-ford-f-250-white_015",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-250/2204-2016-ford-f-250-white/2016-ford-f-250-white_016.mdx": {
  id: "vehicles/ford/f-250/2204-2016-ford-f-250-white/2016-ford-f-250-white_016.mdx",
  slug: "vehicles/ford/f-250/2204-2016-ford-f-250-white/2016-ford-f-250-white_016",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-250/2204-2016-ford-f-250-white/2016-ford-f-250-white_017.mdx": {
  id: "vehicles/ford/f-250/2204-2016-ford-f-250-white/2016-ford-f-250-white_017.mdx",
  slug: "vehicles/ford/f-250/2204-2016-ford-f-250-white/2016-ford-f-250-white_017",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-250/2206-2022-ford-f-250-stone-grey/2022-ford-f-250-stone-grey_001.mdx": {
  id: "vehicles/ford/f-250/2206-2022-ford-f-250-stone-grey/2022-ford-f-250-stone-grey_001.mdx",
  slug: "vehicles/ford/f-250/2206-2022-ford-f-250-stone-grey/2022-ford-f-250-stone-grey_001",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-250/2206-2022-ford-f-250-stone-grey/2022-ford-f-250-stone-grey_002.mdx": {
  id: "vehicles/ford/f-250/2206-2022-ford-f-250-stone-grey/2022-ford-f-250-stone-grey_002.mdx",
  slug: "vehicles/ford/f-250/2206-2022-ford-f-250-stone-grey/2022-ford-f-250-stone-grey_002",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-250/2206-2022-ford-f-250-stone-grey/2022-ford-f-250-stone-grey_003.mdx": {
  id: "vehicles/ford/f-250/2206-2022-ford-f-250-stone-grey/2022-ford-f-250-stone-grey_003.mdx",
  slug: "vehicles/ford/f-250/2206-2022-ford-f-250-stone-grey/2022-ford-f-250-stone-grey_003",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-250/2206-2022-ford-f-250-stone-grey/2022-ford-f-250-stone-grey_004.mdx": {
  id: "vehicles/ford/f-250/2206-2022-ford-f-250-stone-grey/2022-ford-f-250-stone-grey_004.mdx",
  slug: "vehicles/ford/f-250/2206-2022-ford-f-250-stone-grey/2022-ford-f-250-stone-grey_004",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-250/2206-2022-ford-f-250-stone-grey/2022-ford-f-250-stone-grey_005.mdx": {
  id: "vehicles/ford/f-250/2206-2022-ford-f-250-stone-grey/2022-ford-f-250-stone-grey_005.mdx",
  slug: "vehicles/ford/f-250/2206-2022-ford-f-250-stone-grey/2022-ford-f-250-stone-grey_005",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-250/2206-2022-ford-f-250-stone-grey/2022-ford-f-250-stone-grey_006.mdx": {
  id: "vehicles/ford/f-250/2206-2022-ford-f-250-stone-grey/2022-ford-f-250-stone-grey_006.mdx",
  slug: "vehicles/ford/f-250/2206-2022-ford-f-250-stone-grey/2022-ford-f-250-stone-grey_006",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-250/2206-2022-ford-f-250-stone-grey/2022-ford-f-250-stone-grey_007.mdx": {
  id: "vehicles/ford/f-250/2206-2022-ford-f-250-stone-grey/2022-ford-f-250-stone-grey_007.mdx",
  slug: "vehicles/ford/f-250/2206-2022-ford-f-250-stone-grey/2022-ford-f-250-stone-grey_007",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-250/2206-2022-ford-f-250-stone-grey/2022-ford-f-250-stone-grey_008.mdx": {
  id: "vehicles/ford/f-250/2206-2022-ford-f-250-stone-grey/2022-ford-f-250-stone-grey_008.mdx",
  slug: "vehicles/ford/f-250/2206-2022-ford-f-250-stone-grey/2022-ford-f-250-stone-grey_008",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-250/2207-2022-ford-f-250-lariat-white/2022-ford-f-250-white_001.mdx": {
  id: "vehicles/ford/f-250/2207-2022-ford-f-250-lariat-white/2022-ford-f-250-white_001.mdx",
  slug: "vehicles/ford/f-250/2207-2022-ford-f-250-lariat-white/2022-ford-f-250-white_001",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-250/2207-2022-ford-f-250-lariat-white/2022-ford-f-250-white_002.mdx": {
  id: "vehicles/ford/f-250/2207-2022-ford-f-250-lariat-white/2022-ford-f-250-white_002.mdx",
  slug: "vehicles/ford/f-250/2207-2022-ford-f-250-lariat-white/2022-ford-f-250-white_002",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-250/2207-2022-ford-f-250-lariat-white/2022-ford-f-250-white_003.mdx": {
  id: "vehicles/ford/f-250/2207-2022-ford-f-250-lariat-white/2022-ford-f-250-white_003.mdx",
  slug: "vehicles/ford/f-250/2207-2022-ford-f-250-lariat-white/2022-ford-f-250-white_003",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-250/2207-2022-ford-f-250-lariat-white/2022-ford-f-250-white_004.mdx": {
  id: "vehicles/ford/f-250/2207-2022-ford-f-250-lariat-white/2022-ford-f-250-white_004.mdx",
  slug: "vehicles/ford/f-250/2207-2022-ford-f-250-lariat-white/2022-ford-f-250-white_004",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-250/2207-2022-ford-f-250-lariat-white/2022-ford-f-250-white_005.mdx": {
  id: "vehicles/ford/f-250/2207-2022-ford-f-250-lariat-white/2022-ford-f-250-white_005.mdx",
  slug: "vehicles/ford/f-250/2207-2022-ford-f-250-lariat-white/2022-ford-f-250-white_005",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-350/2110-2021-ford-f-350-king-ranch-black/2021-ford-f-350-black_001.mdx": {
  id: "vehicles/ford/f-350/2110-2021-ford-f-350-king-ranch-black/2021-ford-f-350-black_001.mdx",
  slug: "vehicles/ford/f-350/2110-2021-ford-f-350-king-ranch-black/2021-ford-f-350-black_001",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-350/2110-2021-ford-f-350-king-ranch-black/2021-ford-f-350-black_002.mdx": {
  id: "vehicles/ford/f-350/2110-2021-ford-f-350-king-ranch-black/2021-ford-f-350-black_002.mdx",
  slug: "vehicles/ford/f-350/2110-2021-ford-f-350-king-ranch-black/2021-ford-f-350-black_002",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-350/2110-2021-ford-f-350-king-ranch-black/2021-ford-f-350-black_003.mdx": {
  id: "vehicles/ford/f-350/2110-2021-ford-f-350-king-ranch-black/2021-ford-f-350-black_003.mdx",
  slug: "vehicles/ford/f-350/2110-2021-ford-f-350-king-ranch-black/2021-ford-f-350-black_003",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-350/2110-2021-ford-f-350-king-ranch-black/2021-ford-f-350-black_004.mdx": {
  id: "vehicles/ford/f-350/2110-2021-ford-f-350-king-ranch-black/2021-ford-f-350-black_004.mdx",
  slug: "vehicles/ford/f-350/2110-2021-ford-f-350-king-ranch-black/2021-ford-f-350-black_004",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-350/2110-2021-ford-f-350-king-ranch-black/2021-ford-f-350-black_005.mdx": {
  id: "vehicles/ford/f-350/2110-2021-ford-f-350-king-ranch-black/2021-ford-f-350-black_005.mdx",
  slug: "vehicles/ford/f-350/2110-2021-ford-f-350-king-ranch-black/2021-ford-f-350-black_005",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-350/2110-2021-ford-f-350-king-ranch-black/2021-ford-f-350-black_006.mdx": {
  id: "vehicles/ford/f-350/2110-2021-ford-f-350-king-ranch-black/2021-ford-f-350-black_006.mdx",
  slug: "vehicles/ford/f-350/2110-2021-ford-f-350-king-ranch-black/2021-ford-f-350-black_006",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-350/2110-2021-ford-f-350-king-ranch-black/2021-ford-f-350-black_007.mdx": {
  id: "vehicles/ford/f-350/2110-2021-ford-f-350-king-ranch-black/2021-ford-f-350-black_007.mdx",
  slug: "vehicles/ford/f-350/2110-2021-ford-f-350-king-ranch-black/2021-ford-f-350-black_007",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-350/2110-2021-ford-f-350-king-ranch-black/2021-ford-f-350-black_008.mdx": {
  id: "vehicles/ford/f-350/2110-2021-ford-f-350-king-ranch-black/2021-ford-f-350-black_008.mdx",
  slug: "vehicles/ford/f-350/2110-2021-ford-f-350-king-ranch-black/2021-ford-f-350-black_008",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-350/2110-2021-ford-f-350-king-ranch-black/2021-ford-f-350-black_009.mdx": {
  id: "vehicles/ford/f-350/2110-2021-ford-f-350-king-ranch-black/2021-ford-f-350-black_009.mdx",
  slug: "vehicles/ford/f-350/2110-2021-ford-f-350-king-ranch-black/2021-ford-f-350-black_009",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-350/2110-2021-ford-f-350-king-ranch-black/2021-ford-f-350-black_010.mdx": {
  id: "vehicles/ford/f-350/2110-2021-ford-f-350-king-ranch-black/2021-ford-f-350-black_010.mdx",
  slug: "vehicles/ford/f-350/2110-2021-ford-f-350-king-ranch-black/2021-ford-f-350-black_010",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-350/2110-2021-ford-f-350-king-ranch-black/2021-ford-f-350-black_011.mdx": {
  id: "vehicles/ford/f-350/2110-2021-ford-f-350-king-ranch-black/2021-ford-f-350-black_011.mdx",
  slug: "vehicles/ford/f-350/2110-2021-ford-f-350-king-ranch-black/2021-ford-f-350-black_011",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ford/f-350/2110-2021-ford-f-350-king-ranch-black/2021-ford-f-350-black_012.mdx": {
  id: "vehicles/ford/f-350/2110-2021-ford-f-350-king-ranch-black/2021-ford-f-350-black_012.mdx",
  slug: "vehicles/ford/f-350/2110-2021-ford-f-350-king-ranch-black/2021-ford-f-350-black_012",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/gmc/2500/2203-2021-gmc-2500-at4-white/2021-gmc-2500-white_001.mdx": {
  id: "vehicles/gmc/2500/2203-2021-gmc-2500-at4-white/2021-gmc-2500-white_001.mdx",
  slug: "vehicles/gmc/2500/2203-2021-gmc-2500-at4-white/2021-gmc-2500-white_001",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/gmc/2500/2203-2021-gmc-2500-at4-white/2021-gmc-2500-white_002.mdx": {
  id: "vehicles/gmc/2500/2203-2021-gmc-2500-at4-white/2021-gmc-2500-white_002.mdx",
  slug: "vehicles/gmc/2500/2203-2021-gmc-2500-at4-white/2021-gmc-2500-white_002",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/gmc/2500/2203-2021-gmc-2500-at4-white/2021-gmc-2500-white_003.mdx": {
  id: "vehicles/gmc/2500/2203-2021-gmc-2500-at4-white/2021-gmc-2500-white_003.mdx",
  slug: "vehicles/gmc/2500/2203-2021-gmc-2500-at4-white/2021-gmc-2500-white_003",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/gmc/2500/2203-2021-gmc-2500-at4-white/2021-gmc-2500-white_004.mdx": {
  id: "vehicles/gmc/2500/2203-2021-gmc-2500-at4-white/2021-gmc-2500-white_004.mdx",
  slug: "vehicles/gmc/2500/2203-2021-gmc-2500-at4-white/2021-gmc-2500-white_004",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/gmc/2500/2203-2021-gmc-2500-at4-white/2021-gmc-2500-white_005.mdx": {
  id: "vehicles/gmc/2500/2203-2021-gmc-2500-at4-white/2021-gmc-2500-white_005.mdx",
  slug: "vehicles/gmc/2500/2203-2021-gmc-2500-at4-white/2021-gmc-2500-white_005",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/jeep/wrangler/2103-2014-jeep-wrangler-rubicon-gold/2014-jeep-wrangler-gold_001.mdx": {
  id: "vehicles/jeep/wrangler/2103-2014-jeep-wrangler-rubicon-gold/2014-jeep-wrangler-gold_001.mdx",
  slug: "vehicles/jeep/wrangler/2103-2014-jeep-wrangler-rubicon-gold/2014-jeep-wrangler-gold_001",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/jeep/wrangler/2103-2014-jeep-wrangler-rubicon-gold/2014-jeep-wrangler-gold_002.mdx": {
  id: "vehicles/jeep/wrangler/2103-2014-jeep-wrangler-rubicon-gold/2014-jeep-wrangler-gold_002.mdx",
  slug: "vehicles/jeep/wrangler/2103-2014-jeep-wrangler-rubicon-gold/2014-jeep-wrangler-gold_002",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/jeep/wrangler/2103-2014-jeep-wrangler-rubicon-gold/2014-jeep-wrangler-gold_003.mdx": {
  id: "vehicles/jeep/wrangler/2103-2014-jeep-wrangler-rubicon-gold/2014-jeep-wrangler-gold_003.mdx",
  slug: "vehicles/jeep/wrangler/2103-2014-jeep-wrangler-rubicon-gold/2014-jeep-wrangler-gold_003",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/jeep/wrangler/2103-2014-jeep-wrangler-rubicon-gold/2014-jeep-wrangler-gold_004.mdx": {
  id: "vehicles/jeep/wrangler/2103-2014-jeep-wrangler-rubicon-gold/2014-jeep-wrangler-gold_004.mdx",
  slug: "vehicles/jeep/wrangler/2103-2014-jeep-wrangler-rubicon-gold/2014-jeep-wrangler-gold_004",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/jeep/wrangler/2103-2014-jeep-wrangler-rubicon-gold/2014-jeep-wrangler-gold_005.mdx": {
  id: "vehicles/jeep/wrangler/2103-2014-jeep-wrangler-rubicon-gold/2014-jeep-wrangler-gold_005.mdx",
  slug: "vehicles/jeep/wrangler/2103-2014-jeep-wrangler-rubicon-gold/2014-jeep-wrangler-gold_005",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/jeep/wrangler/2103-2014-jeep-wrangler-rubicon-gold/2014-jeep-wrangler-gold_006.mdx": {
  id: "vehicles/jeep/wrangler/2103-2014-jeep-wrangler-rubicon-gold/2014-jeep-wrangler-gold_006.mdx",
  slug: "vehicles/jeep/wrangler/2103-2014-jeep-wrangler-rubicon-gold/2014-jeep-wrangler-gold_006",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/jeep/wrangler/2103-2014-jeep-wrangler-rubicon-gold/2014-jeep-wrangler-gold_007.mdx": {
  id: "vehicles/jeep/wrangler/2103-2014-jeep-wrangler-rubicon-gold/2014-jeep-wrangler-gold_007.mdx",
  slug: "vehicles/jeep/wrangler/2103-2014-jeep-wrangler-rubicon-gold/2014-jeep-wrangler-gold_007",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/jeep/wrangler/2103-2014-jeep-wrangler-rubicon-gold/2014-jeep-wrangler-gold_008.mdx": {
  id: "vehicles/jeep/wrangler/2103-2014-jeep-wrangler-rubicon-gold/2014-jeep-wrangler-gold_008.mdx",
  slug: "vehicles/jeep/wrangler/2103-2014-jeep-wrangler-rubicon-gold/2014-jeep-wrangler-gold_008",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/jeep/wrangler/2103-2014-jeep-wrangler-rubicon-gold/2014-jeep-wrangler-gold_009.mdx": {
  id: "vehicles/jeep/wrangler/2103-2014-jeep-wrangler-rubicon-gold/2014-jeep-wrangler-gold_009.mdx",
  slug: "vehicles/jeep/wrangler/2103-2014-jeep-wrangler-rubicon-gold/2014-jeep-wrangler-gold_009",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/jeep/wrangler/2103-2014-jeep-wrangler-rubicon-gold/2014-jeep-wrangler-gold_010.mdx": {
  id: "vehicles/jeep/wrangler/2103-2014-jeep-wrangler-rubicon-gold/2014-jeep-wrangler-gold_010.mdx",
  slug: "vehicles/jeep/wrangler/2103-2014-jeep-wrangler-rubicon-gold/2014-jeep-wrangler-gold_010",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/jeep/wrangler/2105-2004-jeep-wrangler-unlimited-lj-black/2004-jeep-wrangler-black_001.mdx": {
  id: "vehicles/jeep/wrangler/2105-2004-jeep-wrangler-unlimited-lj-black/2004-jeep-wrangler-black_001.mdx",
  slug: "vehicles/jeep/wrangler/2105-2004-jeep-wrangler-unlimited-lj-black/2004-jeep-wrangler-black_001",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/jeep/wrangler/2105-2004-jeep-wrangler-unlimited-lj-black/2004-jeep-wrangler-black_002.mdx": {
  id: "vehicles/jeep/wrangler/2105-2004-jeep-wrangler-unlimited-lj-black/2004-jeep-wrangler-black_002.mdx",
  slug: "vehicles/jeep/wrangler/2105-2004-jeep-wrangler-unlimited-lj-black/2004-jeep-wrangler-black_002",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/jeep/wrangler/2105-2004-jeep-wrangler-unlimited-lj-black/2004-jeep-wrangler-black_003.mdx": {
  id: "vehicles/jeep/wrangler/2105-2004-jeep-wrangler-unlimited-lj-black/2004-jeep-wrangler-black_003.mdx",
  slug: "vehicles/jeep/wrangler/2105-2004-jeep-wrangler-unlimited-lj-black/2004-jeep-wrangler-black_003",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/jeep/wrangler/2105-2004-jeep-wrangler-unlimited-lj-black/2004-jeep-wrangler-black_004.mdx": {
  id: "vehicles/jeep/wrangler/2105-2004-jeep-wrangler-unlimited-lj-black/2004-jeep-wrangler-black_004.mdx",
  slug: "vehicles/jeep/wrangler/2105-2004-jeep-wrangler-unlimited-lj-black/2004-jeep-wrangler-black_004",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/jeep/wrangler/2105-2004-jeep-wrangler-unlimited-lj-black/2004-jeep-wrangler-black_005.mdx": {
  id: "vehicles/jeep/wrangler/2105-2004-jeep-wrangler-unlimited-lj-black/2004-jeep-wrangler-black_005.mdx",
  slug: "vehicles/jeep/wrangler/2105-2004-jeep-wrangler-unlimited-lj-black/2004-jeep-wrangler-black_005",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/lexus/gx460/2112-2018-lexus-gx460-silver/2018-lexus-gx460-silver_001.mdx": {
  id: "vehicles/lexus/gx460/2112-2018-lexus-gx460-silver/2018-lexus-gx460-silver_001.mdx",
  slug: "vehicles/lexus/gx460/2112-2018-lexus-gx460-silver/2018-lexus-gx460-silver_001",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/lexus/gx460/2112-2018-lexus-gx460-silver/2018-lexus-gx460-silver_002.mdx": {
  id: "vehicles/lexus/gx460/2112-2018-lexus-gx460-silver/2018-lexus-gx460-silver_002.mdx",
  slug: "vehicles/lexus/gx460/2112-2018-lexus-gx460-silver/2018-lexus-gx460-silver_002",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/lexus/gx460/2112-2018-lexus-gx460-silver/2018-lexus-gx460-silver_003.mdx": {
  id: "vehicles/lexus/gx460/2112-2018-lexus-gx460-silver/2018-lexus-gx460-silver_003.mdx",
  slug: "vehicles/lexus/gx460/2112-2018-lexus-gx460-silver/2018-lexus-gx460-silver_003",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/lexus/gx460/2112-2018-lexus-gx460-silver/2018-lexus-gx460-silver_004.mdx": {
  id: "vehicles/lexus/gx460/2112-2018-lexus-gx460-silver/2018-lexus-gx460-silver_004.mdx",
  slug: "vehicles/lexus/gx460/2112-2018-lexus-gx460-silver/2018-lexus-gx460-silver_004",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/lexus/gx460/2112-2018-lexus-gx460-silver/2018-lexus-gx460-silver_005.mdx": {
  id: "vehicles/lexus/gx460/2112-2018-lexus-gx460-silver/2018-lexus-gx460-silver_005.mdx",
  slug: "vehicles/lexus/gx460/2112-2018-lexus-gx460-silver/2018-lexus-gx460-silver_005",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/lexus/gx460/2112-2018-lexus-gx460-silver/2018-lexus-gx460-silver_006.mdx": {
  id: "vehicles/lexus/gx460/2112-2018-lexus-gx460-silver/2018-lexus-gx460-silver_006.mdx",
  slug: "vehicles/lexus/gx460/2112-2018-lexus-gx460-silver/2018-lexus-gx460-silver_006",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/lexus/gx460/2112-2018-lexus-gx460-silver/2018-lexus-gx460-silver_007.mdx": {
  id: "vehicles/lexus/gx460/2112-2018-lexus-gx460-silver/2018-lexus-gx460-silver_007.mdx",
  slug: "vehicles/lexus/gx460/2112-2018-lexus-gx460-silver/2018-lexus-gx460-silver_007",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/lexus/gx460/2112-2018-lexus-gx460-silver/2018-lexus-gx460-silver_008.mdx": {
  id: "vehicles/lexus/gx460/2112-2018-lexus-gx460-silver/2018-lexus-gx460-silver_008.mdx",
  slug: "vehicles/lexus/gx460/2112-2018-lexus-gx460-silver/2018-lexus-gx460-silver_008",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/lexus/gx460/2112-2018-lexus-gx460-silver/2018-lexus-gx460-silver_009.mdx": {
  id: "vehicles/lexus/gx460/2112-2018-lexus-gx460-silver/2018-lexus-gx460-silver_009.mdx",
  slug: "vehicles/lexus/gx460/2112-2018-lexus-gx460-silver/2018-lexus-gx460-silver_009",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/1500/2100-2021-ram-1500-trx-white/2021-ram-1500-white_001.mdx": {
  id: "vehicles/ram/1500/2100-2021-ram-1500-trx-white/2021-ram-1500-white_001.mdx",
  slug: "vehicles/ram/1500/2100-2021-ram-1500-trx-white/2021-ram-1500-white_001",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/1500/2100-2021-ram-1500-trx-white/2021-ram-1500-white_002.mdx": {
  id: "vehicles/ram/1500/2100-2021-ram-1500-trx-white/2021-ram-1500-white_002.mdx",
  slug: "vehicles/ram/1500/2100-2021-ram-1500-trx-white/2021-ram-1500-white_002",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/1500/2100-2021-ram-1500-trx-white/2021-ram-1500-white_003.mdx": {
  id: "vehicles/ram/1500/2100-2021-ram-1500-trx-white/2021-ram-1500-white_003.mdx",
  slug: "vehicles/ram/1500/2100-2021-ram-1500-trx-white/2021-ram-1500-white_003",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/1500/2100-2021-ram-1500-trx-white/2021-ram-1500-white_004.mdx": {
  id: "vehicles/ram/1500/2100-2021-ram-1500-trx-white/2021-ram-1500-white_004.mdx",
  slug: "vehicles/ram/1500/2100-2021-ram-1500-trx-white/2021-ram-1500-white_004",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/1500/2100-2021-ram-1500-trx-white/2021-ram-1500-white_005.mdx": {
  id: "vehicles/ram/1500/2100-2021-ram-1500-trx-white/2021-ram-1500-white_005.mdx",
  slug: "vehicles/ram/1500/2100-2021-ram-1500-trx-white/2021-ram-1500-white_005",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/1500/2100-2021-ram-1500-trx-white/2021-ram-1500-white_006.mdx": {
  id: "vehicles/ram/1500/2100-2021-ram-1500-trx-white/2021-ram-1500-white_006.mdx",
  slug: "vehicles/ram/1500/2100-2021-ram-1500-trx-white/2021-ram-1500-white_006",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/1500/2100-2021-ram-1500-trx-white/2021-ram-1500-white_007.mdx": {
  id: "vehicles/ram/1500/2100-2021-ram-1500-trx-white/2021-ram-1500-white_007.mdx",
  slug: "vehicles/ram/1500/2100-2021-ram-1500-trx-white/2021-ram-1500-white_007",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_001.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_001.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_001",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_002.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_002.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_002",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_003.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_003.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_003",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_004.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_004.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_004",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_005.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_005.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_005",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_006.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_006.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_006",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_007.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_007.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_007",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_008.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_008.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_008",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_009.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_009.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_009",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_010.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_010.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_010",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_011.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_011.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_011",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_012.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_012.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_012",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_013.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_013.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_013",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_014.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_014.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_014",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_015.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_015.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_015",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_016.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_016.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_016",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_017.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_017.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_017",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_018.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_018.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_018",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_019.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_019.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_019",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_020.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_020.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_020",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_021.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_021.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_021",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_022.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_022.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_022",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_023.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_023.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_023",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_024.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_024.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_024",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_025.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_025.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_025",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_026.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_026.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_026",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_027.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_027.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_027",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_028.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_028.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_028",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_029.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_029.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_029",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_030.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_030.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_030",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_031.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_031.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_031",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_032.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_032.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_032",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_033.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_033.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_033",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_034.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_034.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_034",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_035.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_035.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_035",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_036.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_036.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_036",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_037.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_037.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_037",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_038.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_038.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_038",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_039.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_039.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_039",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_040.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_040.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_040",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_041.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_041.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_041",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_042.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_042.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_042",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_043.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_043.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_043",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_044.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_044.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_044",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_045.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_045.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_045",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_046.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_046.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_046",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_047.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_047.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_047",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_048.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_048.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_048",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_049.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_049.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_049",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_050.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_050.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_050",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_051.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_051.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_051",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_052.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_052.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_052",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_053.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_053.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_053",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_054.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_054.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_054",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_055.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_055.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_055",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_056.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_056.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_056",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_057.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_057.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_057",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_058.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_058.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_058",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_059.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_059.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_059",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_060.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_060.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_060",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_061.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_061.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_061",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_062.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_062.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_062",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_063.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_063.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_063",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_064.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_064.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_064",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_065.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_065.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_065",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_066.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_066.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_066",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_067.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_067.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_067",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_068.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_068.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_068",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_069.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_069.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_069",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_070.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_070.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_070",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_071.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_071.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_071",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_072.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_072.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_072",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_073.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_073.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_073",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_074.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_074.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_074",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_075.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_075.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_075",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_076.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_076.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_076",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_077.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_077.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_077",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_078.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_078.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_078",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_079.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_079.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_079",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_080.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_080.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_080",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_081.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_081.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_081",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_082.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_082.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_082",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_083.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_083.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_083",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_084.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_084.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_084",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_085.mdx": {
  id: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_085.mdx",
  slug: "vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_085",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2109-2019-ram-2500-limited-white/2019-ram-2500-white_001.mdx": {
  id: "vehicles/ram/2500/2109-2019-ram-2500-limited-white/2019-ram-2500-white_001.mdx",
  slug: "vehicles/ram/2500/2109-2019-ram-2500-limited-white/2019-ram-2500-white_001",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2109-2019-ram-2500-limited-white/2019-ram-2500-white_002.mdx": {
  id: "vehicles/ram/2500/2109-2019-ram-2500-limited-white/2019-ram-2500-white_002.mdx",
  slug: "vehicles/ram/2500/2109-2019-ram-2500-limited-white/2019-ram-2500-white_002",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2109-2019-ram-2500-limited-white/2019-ram-2500-white_003.mdx": {
  id: "vehicles/ram/2500/2109-2019-ram-2500-limited-white/2019-ram-2500-white_003.mdx",
  slug: "vehicles/ram/2500/2109-2019-ram-2500-limited-white/2019-ram-2500-white_003",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2109-2019-ram-2500-limited-white/2019-ram-2500-white_004.mdx": {
  id: "vehicles/ram/2500/2109-2019-ram-2500-limited-white/2019-ram-2500-white_004.mdx",
  slug: "vehicles/ram/2500/2109-2019-ram-2500-limited-white/2019-ram-2500-white_004",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2205-2006-ram-2500-red/2006-ram-2500-red_001.mdx": {
  id: "vehicles/ram/2500/2205-2006-ram-2500-red/2006-ram-2500-red_001.mdx",
  slug: "vehicles/ram/2500/2205-2006-ram-2500-red/2006-ram-2500-red_001",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2205-2006-ram-2500-red/2006-ram-2500-red_002.mdx": {
  id: "vehicles/ram/2500/2205-2006-ram-2500-red/2006-ram-2500-red_002.mdx",
  slug: "vehicles/ram/2500/2205-2006-ram-2500-red/2006-ram-2500-red_002",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2205-2006-ram-2500-red/2006-ram-2500-red_003.mdx": {
  id: "vehicles/ram/2500/2205-2006-ram-2500-red/2006-ram-2500-red_003.mdx",
  slug: "vehicles/ram/2500/2205-2006-ram-2500-red/2006-ram-2500-red_003",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2205-2006-ram-2500-red/2006-ram-2500-red_004.mdx": {
  id: "vehicles/ram/2500/2205-2006-ram-2500-red/2006-ram-2500-red_004.mdx",
  slug: "vehicles/ram/2500/2205-2006-ram-2500-red/2006-ram-2500-red_004",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2205-2006-ram-2500-red/2006-ram-2500-red_005.mdx": {
  id: "vehicles/ram/2500/2205-2006-ram-2500-red/2006-ram-2500-red_005.mdx",
  slug: "vehicles/ram/2500/2205-2006-ram-2500-red/2006-ram-2500-red_005",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2205-2006-ram-2500-red/2006-ram-2500-red_006.mdx": {
  id: "vehicles/ram/2500/2205-2006-ram-2500-red/2006-ram-2500-red_006.mdx",
  slug: "vehicles/ram/2500/2205-2006-ram-2500-red/2006-ram-2500-red_006",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2205-2006-ram-2500-red/2006-ram-2500-red_007.mdx": {
  id: "vehicles/ram/2500/2205-2006-ram-2500-red/2006-ram-2500-red_007.mdx",
  slug: "vehicles/ram/2500/2205-2006-ram-2500-red/2006-ram-2500-red_007",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2205-2006-ram-2500-red/2006-ram-2500-red_008.mdx": {
  id: "vehicles/ram/2500/2205-2006-ram-2500-red/2006-ram-2500-red_008.mdx",
  slug: "vehicles/ram/2500/2205-2006-ram-2500-red/2006-ram-2500-red_008",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2205-2006-ram-2500-red/2006-ram-2500-red_009.mdx": {
  id: "vehicles/ram/2500/2205-2006-ram-2500-red/2006-ram-2500-red_009.mdx",
  slug: "vehicles/ram/2500/2205-2006-ram-2500-red/2006-ram-2500-red_009",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2207-2022-ram-2500-limited-white/2022-ram-2500-white_001.mdx": {
  id: "vehicles/ram/2500/2207-2022-ram-2500-limited-white/2022-ram-2500-white_001.mdx",
  slug: "vehicles/ram/2500/2207-2022-ram-2500-limited-white/2022-ram-2500-white_001",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2207-2022-ram-2500-limited-white/2022-ram-2500-white_002.mdx": {
  id: "vehicles/ram/2500/2207-2022-ram-2500-limited-white/2022-ram-2500-white_002.mdx",
  slug: "vehicles/ram/2500/2207-2022-ram-2500-limited-white/2022-ram-2500-white_002",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2207-2022-ram-2500-limited-white/2022-ram-2500-white_003.mdx": {
  id: "vehicles/ram/2500/2207-2022-ram-2500-limited-white/2022-ram-2500-white_003.mdx",
  slug: "vehicles/ram/2500/2207-2022-ram-2500-limited-white/2022-ram-2500-white_003",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2207-2022-ram-2500-limited-white/2022-ram-2500-white_004.mdx": {
  id: "vehicles/ram/2500/2207-2022-ram-2500-limited-white/2022-ram-2500-white_004.mdx",
  slug: "vehicles/ram/2500/2207-2022-ram-2500-limited-white/2022-ram-2500-white_004",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2207-2022-ram-2500-limited-white/2022-ram-2500-white_005.mdx": {
  id: "vehicles/ram/2500/2207-2022-ram-2500-limited-white/2022-ram-2500-white_005.mdx",
  slug: "vehicles/ram/2500/2207-2022-ram-2500-limited-white/2022-ram-2500-white_005",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2207-2022-ram-2500-limited-white/2022-ram-2500-white_006.mdx": {
  id: "vehicles/ram/2500/2207-2022-ram-2500-limited-white/2022-ram-2500-white_006.mdx",
  slug: "vehicles/ram/2500/2207-2022-ram-2500-limited-white/2022-ram-2500-white_006",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2207-2022-ram-2500-limited-white/2022-ram-2500-white_007.mdx": {
  id: "vehicles/ram/2500/2207-2022-ram-2500-limited-white/2022-ram-2500-white_007.mdx",
  slug: "vehicles/ram/2500/2207-2022-ram-2500-limited-white/2022-ram-2500-white_007",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2207-2022-ram-2500-limited-white/2022-ram-2500-white_008.mdx": {
  id: "vehicles/ram/2500/2207-2022-ram-2500-limited-white/2022-ram-2500-white_008.mdx",
  slug: "vehicles/ram/2500/2207-2022-ram-2500-limited-white/2022-ram-2500-white_008",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2207-2022-ram-2500-limited-white/2022-ram-2500-white_009.mdx": {
  id: "vehicles/ram/2500/2207-2022-ram-2500-limited-white/2022-ram-2500-white_009.mdx",
  slug: "vehicles/ram/2500/2207-2022-ram-2500-limited-white/2022-ram-2500-white_009",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2207-2022-ram-2500-limited-white/2022-ram-2500-white_010.mdx": {
  id: "vehicles/ram/2500/2207-2022-ram-2500-limited-white/2022-ram-2500-white_010.mdx",
  slug: "vehicles/ram/2500/2207-2022-ram-2500-limited-white/2022-ram-2500-white_010",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2207-2022-ram-2500-limited-white/2022-ram-2500-white_011.mdx": {
  id: "vehicles/ram/2500/2207-2022-ram-2500-limited-white/2022-ram-2500-white_011.mdx",
  slug: "vehicles/ram/2500/2207-2022-ram-2500-limited-white/2022-ram-2500-white_011",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2207-2022-ram-2500-limited-white/2022-ram-2500-white_012.mdx": {
  id: "vehicles/ram/2500/2207-2022-ram-2500-limited-white/2022-ram-2500-white_012.mdx",
  slug: "vehicles/ram/2500/2207-2022-ram-2500-limited-white/2022-ram-2500-white_012",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/ram/2500/2207-2022-ram-2500-limited-white/2022-ram-2500-white_013.mdx": {
  id: "vehicles/ram/2500/2207-2022-ram-2500-limited-white/2022-ram-2500-white_013.mdx",
  slug: "vehicles/ram/2500/2207-2022-ram-2500-limited-white/2022-ram-2500-white_013",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_001.mdx": {
  id: "vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_001.mdx",
  slug: "vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_001",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_002.mdx": {
  id: "vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_002.mdx",
  slug: "vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_002",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_003.mdx": {
  id: "vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_003.mdx",
  slug: "vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_003",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_004.mdx": {
  id: "vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_004.mdx",
  slug: "vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_004",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_005.mdx": {
  id: "vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_005.mdx",
  slug: "vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_005",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_006.mdx": {
  id: "vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_006.mdx",
  slug: "vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_006",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_007.mdx": {
  id: "vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_007.mdx",
  slug: "vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_007",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_008.mdx": {
  id: "vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_008.mdx",
  slug: "vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_008",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_009.mdx": {
  id: "vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_009.mdx",
  slug: "vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_009",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_010.mdx": {
  id: "vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_010.mdx",
  slug: "vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_010",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_011.mdx": {
  id: "vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_011.mdx",
  slug: "vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_011",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_012.mdx": {
  id: "vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_012.mdx",
  slug: "vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_012",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_013.mdx": {
  id: "vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_013.mdx",
  slug: "vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_013",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_014.mdx": {
  id: "vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_014.mdx",
  slug: "vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_014",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_015.mdx": {
  id: "vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_015.mdx",
  slug: "vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_015",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_016.mdx": {
  id: "vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_016.mdx",
  slug: "vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_016",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_017.mdx": {
  id: "vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_017.mdx",
  slug: "vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_017",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_018.mdx": {
  id: "vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_018.mdx",
  slug: "vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_018",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_019.mdx": {
  id: "vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_019.mdx",
  slug: "vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_019",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_020.mdx": {
  id: "vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_020.mdx",
  slug: "vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_020",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_021.mdx": {
  id: "vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_021.mdx",
  slug: "vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_021",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_022.mdx": {
  id: "vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_022.mdx",
  slug: "vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_022",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_023.mdx": {
  id: "vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_023.mdx",
  slug: "vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_023",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_024.mdx": {
  id: "vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_024.mdx",
  slug: "vehicles/toyota/land-cruiser/2111-2007-toyota-land-cruiser-black/2007-toyota-land-cruiser-black_024",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/toyota/tacoma/2204-2021-toyota-tacoma-silver/2021-toyota-tacoma-silver_001.mdx": {
  id: "vehicles/toyota/tacoma/2204-2021-toyota-tacoma-silver/2021-toyota-tacoma-silver_001.mdx",
  slug: "vehicles/toyota/tacoma/2204-2021-toyota-tacoma-silver/2021-toyota-tacoma-silver_001",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/toyota/tacoma/2204-2021-toyota-tacoma-silver/2021-toyota-tacoma-silver_002.mdx": {
  id: "vehicles/toyota/tacoma/2204-2021-toyota-tacoma-silver/2021-toyota-tacoma-silver_002.mdx",
  slug: "vehicles/toyota/tacoma/2204-2021-toyota-tacoma-silver/2021-toyota-tacoma-silver_002",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/toyota/tacoma/2204-2021-toyota-tacoma-silver/2021-toyota-tacoma-silver_003.mdx": {
  id: "vehicles/toyota/tacoma/2204-2021-toyota-tacoma-silver/2021-toyota-tacoma-silver_003.mdx",
  slug: "vehicles/toyota/tacoma/2204-2021-toyota-tacoma-silver/2021-toyota-tacoma-silver_003",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/toyota/tacoma/2204-2021-toyota-tacoma-silver/2021-toyota-tacoma-silver_004.mdx": {
  id: "vehicles/toyota/tacoma/2204-2021-toyota-tacoma-silver/2021-toyota-tacoma-silver_004.mdx",
  slug: "vehicles/toyota/tacoma/2204-2021-toyota-tacoma-silver/2021-toyota-tacoma-silver_004",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/toyota/tacoma/2204-2021-toyota-tacoma-silver/2021-toyota-tacoma-silver_005.mdx": {
  id: "vehicles/toyota/tacoma/2204-2021-toyota-tacoma-silver/2021-toyota-tacoma-silver_005.mdx",
  slug: "vehicles/toyota/tacoma/2204-2021-toyota-tacoma-silver/2021-toyota-tacoma-silver_005",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/toyota/tacoma/2204-2021-toyota-tacoma-silver/2021-toyota-tacoma-silver_006.mdx": {
  id: "vehicles/toyota/tacoma/2204-2021-toyota-tacoma-silver/2021-toyota-tacoma-silver_006.mdx",
  slug: "vehicles/toyota/tacoma/2204-2021-toyota-tacoma-silver/2021-toyota-tacoma-silver_006",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/toyota/tacoma/2204-2021-toyota-tacoma-silver/2021-toyota-tacoma-silver_007.mdx": {
  id: "vehicles/toyota/tacoma/2204-2021-toyota-tacoma-silver/2021-toyota-tacoma-silver_007.mdx",
  slug: "vehicles/toyota/tacoma/2204-2021-toyota-tacoma-silver/2021-toyota-tacoma-silver_007",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/toyota/tacoma/2204-2021-toyota-tacoma-silver/2021-toyota-tacoma-silver_008.mdx": {
  id: "vehicles/toyota/tacoma/2204-2021-toyota-tacoma-silver/2021-toyota-tacoma-silver_008.mdx",
  slug: "vehicles/toyota/tacoma/2204-2021-toyota-tacoma-silver/2021-toyota-tacoma-silver_008",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/toyota/tacoma/2204-2021-toyota-tacoma-silver/2021-toyota-tacoma-silver_009.mdx": {
  id: "vehicles/toyota/tacoma/2204-2021-toyota-tacoma-silver/2021-toyota-tacoma-silver_009.mdx",
  slug: "vehicles/toyota/tacoma/2204-2021-toyota-tacoma-silver/2021-toyota-tacoma-silver_009",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/toyota/tacoma/2204-2021-toyota-tacoma-silver/2021-toyota-tacoma-silver_010.mdx": {
  id: "vehicles/toyota/tacoma/2204-2021-toyota-tacoma-silver/2021-toyota-tacoma-silver_010.mdx",
  slug: "vehicles/toyota/tacoma/2204-2021-toyota-tacoma-silver/2021-toyota-tacoma-silver_010",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/toyota/tacoma/2204-2021-toyota-tacoma-silver/2021-toyota-tacoma-silver_011.mdx": {
  id: "vehicles/toyota/tacoma/2204-2021-toyota-tacoma-silver/2021-toyota-tacoma-silver_011.mdx",
  slug: "vehicles/toyota/tacoma/2204-2021-toyota-tacoma-silver/2021-toyota-tacoma-silver_011",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/toyota/tacoma/2204-2021-toyota-tacoma-silver/2021-toyota-tacoma-silver_012.mdx": {
  id: "vehicles/toyota/tacoma/2204-2021-toyota-tacoma-silver/2021-toyota-tacoma-silver_012.mdx",
  slug: "vehicles/toyota/tacoma/2204-2021-toyota-tacoma-silver/2021-toyota-tacoma-silver_012",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/toyota/tacoma/2204-2021-toyota-tacoma-silver/2021-toyota-tacoma-silver_013.mdx": {
  id: "vehicles/toyota/tacoma/2204-2021-toyota-tacoma-silver/2021-toyota-tacoma-silver_013.mdx",
  slug: "vehicles/toyota/tacoma/2204-2021-toyota-tacoma-silver/2021-toyota-tacoma-silver_013",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/toyota/tacoma/2204-2021-toyota-tacoma-silver/2021-toyota-tacoma-silver_014.mdx": {
  id: "vehicles/toyota/tacoma/2204-2021-toyota-tacoma-silver/2021-toyota-tacoma-silver_014.mdx",
  slug: "vehicles/toyota/tacoma/2204-2021-toyota-tacoma-silver/2021-toyota-tacoma-silver_014",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/toyota/tacoma/2204-2021-toyota-tacoma-silver/2021-toyota-tacoma-silver_015.mdx": {
  id: "vehicles/toyota/tacoma/2204-2021-toyota-tacoma-silver/2021-toyota-tacoma-silver_015.mdx",
  slug: "vehicles/toyota/tacoma/2204-2021-toyota-tacoma-silver/2021-toyota-tacoma-silver_015",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/toyota/tacoma/2204-2021-toyota-tacoma-silver/2021-toyota-tacoma-silver_016.mdx": {
  id: "vehicles/toyota/tacoma/2204-2021-toyota-tacoma-silver/2021-toyota-tacoma-silver_016.mdx",
  slug: "vehicles/toyota/tacoma/2204-2021-toyota-tacoma-silver/2021-toyota-tacoma-silver_016",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
"vehicles/toyota/tacoma/2204-2021-toyota-tacoma-silver/2021-toyota-tacoma-silver_017.mdx": {
  id: "vehicles/toyota/tacoma/2204-2021-toyota-tacoma-silver/2021-toyota-tacoma-silver_017.mdx",
  slug: "vehicles/toyota/tacoma/2204-2021-toyota-tacoma-silver/2021-toyota-tacoma-silver_017",
  body: string,
  collection: "images",
  data: InferEntrySchema<"images">
} & { render(): Render[".mdx"] },
},
"models": {
"chevrolet/colorado.mdx": {
  id: "chevrolet/colorado.mdx",
  slug: "chevrolet/colorado",
  body: string,
  collection: "models",
  data: any
} & { render(): Render[".mdx"] },
"chevrolet/silverado-1500.mdx": {
  id: "chevrolet/silverado-1500.mdx",
  slug: "chevrolet/silverado-1500",
  body: string,
  collection: "models",
  data: any
} & { render(): Render[".mdx"] },
"chevrolet/silverado-hd.mdx": {
  id: "chevrolet/silverado-hd.mdx",
  slug: "chevrolet/silverado-hd",
  body: string,
  collection: "models",
  data: any
} & { render(): Render[".mdx"] },
"chevrolet/tahoe.mdx": {
  id: "chevrolet/tahoe.mdx",
  slug: "chevrolet/tahoe",
  body: string,
  collection: "models",
  data: any
} & { render(): Render[".mdx"] },
"ford/bronco.mdx": {
  id: "ford/bronco.mdx",
  slug: "ford/bronco",
  body: string,
  collection: "models",
  data: any
} & { render(): Render[".mdx"] },
"ford/f-150.mdx": {
  id: "ford/f-150.mdx",
  slug: "ford/f-150",
  body: string,
  collection: "models",
  data: any
} & { render(): Render[".mdx"] },
"ford/ranger.mdx": {
  id: "ford/ranger.mdx",
  slug: "ford/ranger",
  body: string,
  collection: "models",
  data: any
} & { render(): Render[".mdx"] },
"ford/raptor.mdx": {
  id: "ford/raptor.mdx",
  slug: "ford/raptor",
  body: string,
  collection: "models",
  data: any
} & { render(): Render[".mdx"] },
"ford/super-duty.mdx": {
  id: "ford/super-duty.mdx",
  slug: "ford/super-duty",
  body: string,
  collection: "models",
  data: any
} & { render(): Render[".mdx"] },
"gmc/canyon.mdx": {
  id: "gmc/canyon.mdx",
  slug: "gmc/canyon",
  body: string,
  collection: "models",
  data: any
} & { render(): Render[".mdx"] },
"gmc/sierra-1500.mdx": {
  id: "gmc/sierra-1500.mdx",
  slug: "gmc/sierra-1500",
  body: string,
  collection: "models",
  data: any
} & { render(): Render[".mdx"] },
"gmc/sierra-hd.mdx": {
  id: "gmc/sierra-hd.mdx",
  slug: "gmc/sierra-hd",
  body: string,
  collection: "models",
  data: any
} & { render(): Render[".mdx"] },
"gmc/yukon.mdx": {
  id: "gmc/yukon.mdx",
  slug: "gmc/yukon",
  body: string,
  collection: "models",
  data: any
} & { render(): Render[".mdx"] },
"jeep/gladiator.mdx": {
  id: "jeep/gladiator.mdx",
  slug: "jeep/gladiator",
  body: string,
  collection: "models",
  data: any
} & { render(): Render[".mdx"] },
"jeep/wrangler.mdx": {
  id: "jeep/wrangler.mdx",
  slug: "jeep/wrangler",
  body: string,
  collection: "models",
  data: any
} & { render(): Render[".mdx"] },
"lexus/gx.mdx": {
  id: "lexus/gx.mdx",
  slug: "lexus/gx",
  body: string,
  collection: "models",
  data: any
} & { render(): Render[".mdx"] },
"lexus/lx.mdx": {
  id: "lexus/lx.mdx",
  slug: "lexus/lx",
  body: string,
  collection: "models",
  data: any
} & { render(): Render[".mdx"] },
"ram/1500.mdx": {
  id: "ram/1500.mdx",
  slug: "ram/1500",
  body: string,
  collection: "models",
  data: any
} & { render(): Render[".mdx"] },
"ram/2500-3500.mdx": {
  id: "ram/2500-3500.mdx",
  slug: "ram/2500-3500",
  body: string,
  collection: "models",
  data: any
} & { render(): Render[".mdx"] },
"toyota/4runner.mdx": {
  id: "toyota/4runner.mdx",
  slug: "toyota/4runner",
  body: string,
  collection: "models",
  data: any
} & { render(): Render[".mdx"] },
"toyota/land-cruiser.mdx": {
  id: "toyota/land-cruiser.mdx",
  slug: "toyota/land-cruiser",
  body: string,
  collection: "models",
  data: any
} & { render(): Render[".mdx"] },
"toyota/tundra.mdx": {
  id: "toyota/tundra.mdx",
  slug: "toyota/tundra",
  body: string,
  collection: "models",
  data: any
} & { render(): Render[".mdx"] },
"utv/can-am.mdx": {
  id: "utv/can-am.mdx",
  slug: "utv/can-am",
  body: string,
  collection: "models",
  data: any
} & { render(): Render[".mdx"] },
"utv/polaris.mdx": {
  id: "utv/polaris.mdx",
  slug: "utv/polaris",
  body: string,
  collection: "models",
  data: any
} & { render(): Render[".mdx"] },
},
"parts": {
"bed-roof.mdx": {
  id: "bed-roof.mdx",
  slug: "bed-roof",
  body: string,
  collection: "parts",
  data: any
} & { render(): Render[".mdx"] },
"body-bumper.mdx": {
  id: "body-bumper.mdx",
  slug: "body-bumper",
  body: string,
  collection: "parts",
  data: any
} & { render(): Render[".mdx"] },
"lighting.mdx": {
  id: "lighting.mdx",
  slug: "lighting",
  body: string,
  collection: "parts",
  data: any
} & { render(): Render[".mdx"] },
"performance.mdx": {
  id: "performance.mdx",
  slug: "performance",
  body: string,
  collection: "parts",
  data: any
} & { render(): Render[".mdx"] },
"specialties.mdx": {
  id: "specialties.mdx",
  slug: "specialties",
  body: string,
  collection: "parts",
  data: any
} & { render(): Render[".mdx"] },
"suspension.mdx": {
  id: "suspension.mdx",
  slug: "suspension",
  body: string,
  collection: "parts",
  data: any
} & { render(): Render[".mdx"] },
"wheel-tire.mdx": {
  id: "wheel-tire.mdx",
  slug: "wheel-tire",
  body: string,
  collection: "parts",
  data: any
} & { render(): Render[".mdx"] },
},
"vehicles": {
"chevrolet.mdx": {
  id: "chevrolet.mdx",
  slug: "chevrolet",
  body: string,
  collection: "vehicles",
  data: any
} & { render(): Render[".mdx"] },
"ford.mdx": {
  id: "ford.mdx",
  slug: "ford",
  body: string,
  collection: "vehicles",
  data: any
} & { render(): Render[".mdx"] },
"gmc.mdx": {
  id: "gmc.mdx",
  slug: "gmc",
  body: string,
  collection: "vehicles",
  data: any
} & { render(): Render[".mdx"] },
"jeep.mdx": {
  id: "jeep.mdx",
  slug: "jeep",
  body: string,
  collection: "vehicles",
  data: any
} & { render(): Render[".mdx"] },
"lexus.mdx": {
  id: "lexus.mdx",
  slug: "lexus",
  body: string,
  collection: "vehicles",
  data: any
} & { render(): Render[".mdx"] },
"ram.mdx": {
  id: "ram.mdx",
  slug: "ram",
  body: string,
  collection: "vehicles",
  data: any
} & { render(): Render[".mdx"] },
"toyota.mdx": {
  id: "toyota.mdx",
  slug: "toyota",
  body: string,
  collection: "vehicles",
  data: any
} & { render(): Render[".mdx"] },
"utv.mdx": {
  id: "utv.mdx",
  slug: "utv",
  body: string,
  collection: "vehicles",
  data: any
} & { render(): Render[".mdx"] },
},

	};

	type ContentConfig = typeof import("../src/content/config");
}
