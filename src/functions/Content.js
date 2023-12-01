import { getEntry, getEntries } from "astro:content";

export async function getModels(make) {
    const makeData = await getEntry("makes", make);
    const models = await getEntries(makeData.data.models);

    return models;
}
