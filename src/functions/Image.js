import { imageConfig } from "@/config";

export function getMedia(path) {
    return `${imageConfig.cloudUrl}/${path}`;
}

export function getBuildImage(path, number) {
    // add a single leading zero
    const filename = String(number).padStart(2, "0");

    return `builds/${path}/${filename}.jpg`;
}
