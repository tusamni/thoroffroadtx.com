import { ImageConfig } from "@/config";

export function getMedia(path) {
    return `${ImageConfig.cloudUrl}/${path}`;
}

export function getBuildImage(path, number) {
    // add a single leading zero
    const filename = String(number).padStart(2, "0");

    return `builds/${path}/${filename}.jpg`;
}

export function isPortrait(img) {
    var w = img.width,
        h = img.height;
    return h > w ? `aspect-[9/16]` : `aspect-[3/2]`;
}
