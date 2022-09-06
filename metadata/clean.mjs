import * as fs from 'fs';
import * as path from 'path';

import { input, output } from "./_settings.mjs";

const directories = [input, output];

directories.forEach(cleanFolder);

async function cleanFolder(directory) {
    //fs.rmSync(directory, { recursive: true, force: true });

    // fs.readdir(directory, (err, files) => {
    //     if (err) throw err;

    //     for (const file of files) {
    //         fs.unlink(path.join(directory, file), err => {
    //             if (err) throw err;
    //         });
    //     }
    // });
}