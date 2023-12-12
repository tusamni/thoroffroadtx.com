import { getEntry } from "astro:content";

export async function getBuildTitle(id) {
    const build = await getEntry("builds", id);

    const make = await getEntry("makes", build.data.meta.make.id);
    const model = await getEntry("models", build.data.meta.model.id);

    return `${build.data.meta.year} ${make.data.title} ${model.data.title} ${build.data.meta.trim}`;
}
