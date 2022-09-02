import * as path from "path";

// config
import { imageConfig } from "@/src/config.ts";
import devImage from "@/src/assets/images/dev.jpg";

// get the public image url
export function getPublicPath(file) {
    return `${imageConfig.cloudUrl}${file}`;
}

export async function getImage(image) {
    // load placeholder image and json when in dev mode
    if (import.meta.env.MODE === "development") {
        return {
            width: 1539,
            height: 2736,
            title: "THOR Off Road",
            description: "Carli lift kit, Rock Slide steps, Method wheels, Poison Spider bumper, Warn winch",
            alt: "Carli lift kit, Rock Slide steps, Method wheels, Poison Spider bumper, Warn winch",
            src: devImage.src,
            aspectRatio: 1539 / 2736,
        };
    } else {
        const publicPath = getPublicPath(image);

        const extension = path.extname(publicPath); // extension of the image file
        const baseFilename = path.basename(publicPath, extension); // filename of the image minus the extension
        const dirPath = path.dirname(publicPath);

        const metaFile = dirPath + "/" + baseFilename + ".json";

        const response = await fetch(metaFile);
        const json = await response.json();

        return {
            width: json.width,
            height: json.height,
            title: json.title,
            description: json.description,
            alt: json.alt,
            src: publicPath,
            aspectRatio: json.width / json.height,
        };
    }
}
