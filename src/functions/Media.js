import * as path from 'path';

// config
import { imageConfig } from "@/src/config.ts"

// get the public image url
export function getPublicPath(file) {
    return `${imageConfig.cloudUrl}${file}`;
}

export async function getImage(image) {
    const publicPath = getPublicPath(image);
    
    const extension = path.extname(publicPath); // extension of the image file
    const baseFilename = path.basename(publicPath, extension); // filename of the image minus the extension
    const dirPath = path.dirname(publicPath);

    const metaFile = dirPath + '/' + baseFilename + '.json';

    const response = await fetch(metaFile);
    const json = await response.json();

    return {
        "width": json.width,
        "height": json.height,
        "title": json.title,
        "description": json.description,
        "alt": json.alt,
        "src": publicPath,
        "aspectRatio": json.width / json.height
    }
}