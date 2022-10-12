import * as path from "path";
import jsonFile from "jsonfile";

// config
import { imageConfig } from "@/src/config.ts";

// get the public image url
export function getPublicPath(file) {}

export function getImage(image) {
    const dir = "./src/assets/images";
    const pathname = `${path.dirname(image)}/${path.parse(image).name}`;
    const extension = path.parse(image).ext;
    const metafile = `${dir}/${pathname}.json`;
    const source = `${imageConfig.cloudUrl}/images/${pathname}${extension}`;

    // try to find an associated metadata file
    // if error, simply return the image src
    try {
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
    } catch (error) {
        return {
            src: source,
        };
    }
}
