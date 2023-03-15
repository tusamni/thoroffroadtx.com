import imagesize from "probe-image-size";
import sheetsparser from "public-google-sheets-parser";
import yaml from "yaml";

import * as fs from "fs";

import { imageConfig } from "../src/config.mjs";

const inventory = "1_-PZIdaMz79QaG4-MBF53IQ96bkhiqyI92Ewt2cuiRU";
const parser = new sheetsparser(inventory);
const galleries = await parser.parse();

buildImages();

async function buildImages() {
    for (const gallery of galleries) {
        //galleries.forEach((gallery) => {
        // let folder = path.dirname(files[i]); // folder of metadata file

        let totalImages = gallery.totalImages; // get the total number of images in the gallery
        let filename = gallery.filename;
        let filepath = gallery.filepath;

        // // remove entries from the JSON object
        // // they don't need to be in each image file
        delete gallery.filename;
        delete gallery.filepath;
        delete gallery.totalImages;

        // // count through the total number of required images
        // // retain three leading zeros and start at 1
        for (let i = 1; i < totalImages + 1; i++) {
            let number = ("00" + i).slice(-3);
            let localMdx = `src/content/${filepath}/${filename}_${number}.mdx`;

            // check to see if file exists already
            // if not, get the metadata and write the file
            if (!fs.existsSync(localMdx)) {
                let remoteImage = `${imageConfig.cloudUrl}/${filepath}/${filename}_${number}.jpg`;

                // get the image dimensions
                // astro image requires it for remote images
                await imagesize(remoteImage)
                    .then((result) => {
                        gallery.width = result.width;
                        gallery.height = result.height;
                    })
                    .catch((err) => console.log(`error: ${err}: || ${remoteImage}`));

                let rawYaml = yaml.stringify(gallery); // convert the json to yaml
                let mdx = `---\n${rawYaml}---`; // add frontmatter markers and a new line

                fs.mkdir(`src/content/${filepath}`, { recursive: true }, function (err) {
                    if (err) {
                        console.log("Folder path creation error");
                    }

                    fs.writeFile(localMdx, mdx, (err) => {
                        if (err) {
                            console.error(err);
                        } else {
                            //console.log(`Created new image: ${localMdx}`);
                        }
                    });
                });
            }
        }
    }
}
