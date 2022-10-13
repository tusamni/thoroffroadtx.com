import * as path from "path";
import jsonFile from "jsonfile";
import { S3, ListObjectsCommand } from "@aws-sdk/client-s3";

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

// create an api connection to digitalocean spaces
export const spacesClient = new S3({
    endpoint: "https://nyc3.digitaloceanspaces.com",
    region: "us-east-1",
    credentials: {
        accessKeyId: import.meta.env.SPACES_KEY,
        secretAccessKey: import.meta.env.SPACES_SECRET,
    },
});

// list all the objects in a container
export const listFolders = async () => {
    const settings = {
        Bucket: "thoroffroad",
        Prefix: "images",
    };

    try {
        const data = await spacesClient.listObjectsV2(settings);

        const objects = [];
        data.Contents.map((obj) => {
            objects.push(obj.Key);
        });
        //const folders = objects.filter((o) => !o.includes("."));

        return objects;
    } catch (err) {
        console.log("Error", err);
    }
};
