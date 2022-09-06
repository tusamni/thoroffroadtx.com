import { input, output, maxDimension, format, folderCheck, metadataCheck } from "./_settings.mjs";

import * as fs from 'fs';
import * as path from 'path';
import sharp from 'sharp';
import filehound from 'filehound'

folderCheck();
metadataCheck();

// get all directories
const subdirectories = filehound.create()
    .path(input)
    .directory()
    .findSync();

subdirectories.map(s => {
    // read the files in the input directory
    fs.readdir(s, function (err, files) {
        const shootDirectory = s.replace("_input\\", "");
        const outputDir = `${output}${shootDirectory}`;
        if (!fs.existsSync(`${output}${shootDirectory}`)) {
            fs.mkdirSync(`${output}${shootDirectory}`);
        }

        // calculate how many images are in the input folder
        const images = filehound.create()
            .path(s)
            .ext('json')
            .not()
            .findSync();
        const inputCount = images.length;
        let currentCount = 1;

        // read in metadata
        let metaFile = fs.readFileSync(`${s}/_metadata.json`);
        const metaContents = JSON.parse(metaFile);
        
        const filename = metaContents.title.replaceAll(' ', '-');

        // for each of the files
        images.forEach(async function (file, i) {
            let filenameCount = String(i+1).padStart(3, "0");
            
            let outputFile = `${filename}_${filenameCount}`;
            
            // get the sizes for the image
            const { width, height } = await sharp(file).metadata();
        
            // generate the resized images
            sharp(file)
                .resize(maxDimension, maxDimension, { fit: "inside" })
                .toFile(`${outputDir}/${outputFile}.${format}`)
                .then(info => {
                    console.log(`Successfully created ${i} of ${inputCount}: ${outputFile}.${format}`)
                    
                    // write the metadata to the object
                    let metadata = {
                        "title": metaContents.title,
                        "description": metaContents.description,
                        "alt": metaContents.alt,
                        "width": info.width,
                        "height": info.height
                    };
                    let json = JSON.stringify(metadata);
                    fs.writeFileSync(`${outputDir}/${outputFile}.json`, json);
                })
                .catch(err => {
                    console.log(err)
                })
        })
    })
})