import { getEntry } from "astro:content";

export async function getBuildTitle(id) {
    const build = await getEntry("builds", id);

    const make = await getEntry("makes", build.data.make.id);
    const model = await getEntry("models", build.data.model.id);

    return `${build.data.year} ${make.data.title} ${model.data.title} ${build.data.trim}`
}
