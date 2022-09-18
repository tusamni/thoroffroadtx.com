import jsonFile from "jsonfile";

// config
import { imageConfig } from "@/src/config.ts";

// get the public image url
export function getPublicPath(file) {
    return `${imageConfig.cloudUrl}${file}`;
}

export function getImage(image) {
    const dir = "./src/assets/images";
    const extension = "jpg";
    const metafile = `${dir}/${image}.json`;
    const source = getPublicPath(`/images/${image}.${extension}`);

    const metadata = jsonFile.readFileSync(metafile);

    return {
        width: metadata.width,
        height: metadata.height,
        title: metadata.title,
        description: metadata.description,
        alt: metadata.alt,
        src: source,
        aspectRatio: metadata.width / metadata.height,
    };
}
