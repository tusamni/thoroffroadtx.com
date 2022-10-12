import * as fs from "fs";
import Filehound from "filehound";

// set folders
export const input = "./_input/";
export const output = "./_output/";

// set sizes and available formats
export const maxDimension = 2500;
export const format = "jpg";

export function folderCheck() {
    // check for input and output folders
    if (!fs.existsSync(input)) {
        fs.mkdirSync(input);
    }
    if (!fs.existsSync(output)) {
        fs.mkdirSync(output);
    }
}

export function metadataCheck() {
    const metafile = "metadata.json";
    const subdirectories = Filehound.create().path(input).directory().findSync();

    subdirectories.map((s) => {
        if (!fs.existsSync(`${s}/${metafile}`)) {
            throw new Error("You're missing metafiles in one of the directories");
        }
    });
}
