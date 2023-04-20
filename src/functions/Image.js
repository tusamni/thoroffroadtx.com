// config
import { Image } from "../config.js";

export function getMedia(path) {
    return `${Image.cloudUrl}/images/${path}`;
}

export function getBuildImage(path, number) {
    // add a single leading zero
    const filename = String(number).padStart(2, "0");

    return `${Image.cloudUrl}/images/builds/${path}/${filename}.jpg`;
}

export function isPortrait(img) {
    var w = img.width,
        h = img.height;
    return h > w ? `aspect-[9/16]` : `aspect-[3/2]`;
}
