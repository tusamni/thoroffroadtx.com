import { getEntry } from "astro:content";

export async function getBuildTitle(id) {
	const build = await getEntry("builds", id);

	return `${build.data.meta.year} ${build.data.meta.make.id} ${build.data.meta.model.id}${build.data.meta.trim ? ` ${build.data.meta.trim}` : ``}`;
}

export async function getBuildDescription(id) {
	const build = await getEntry("builds", id);
	const make = await getEntry(build.data.meta.make.collection, build.data.meta.make.id);
	const model = await getEntry(build.data.meta.model.collection, build.data.meta.model.id);

	return `${build.data.meta.year} ${make.data.title} ${model.data.title}${build.data.meta.trim ? ` ${build.data.meta.trim}` : ``} in ${build.data.meta.color} with ${build.data.meta.parts.map(
		function (p, index) {
			return (index ? " " : "") + p;
		}
	)}`;
}
