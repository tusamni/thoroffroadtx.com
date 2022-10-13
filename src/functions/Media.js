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

// list all the objects in a do spaces s3 container
export const getImageDirs = async () => {
    const settings = {
        Bucket: "thoroffroad",
        Prefix: "images/",
    };

    try {
        const data = await spacesClient.listObjectsV2(settings);

        const objects = [];
        data.Contents.map((obj) => {
            const filename = path.parse(obj.Key).base; // get the full filename

            let object = obj.Key;

            object = object.replace(filename, ``); // remove the file from the path
            object = object.replace(/\/+$/, ``); // remove the trailing slashes

            objects.push(object);
        });

        // create a unique array
        let unique = [...new Set(objects)];

        // remove the unwanted directories
        const removeDirs = ["", "images"]; // directories to remove
        unique = unique.filter((val) => !removeDirs.includes(val));

        // remove leading "images" from the path
        unique = unique.map(function (e) {
            return e.replace("images/", "");
        });

        return unique;
    } catch (err) {
        console.log("Error", err);
    }
};

// list all the objects in a do spaces s3 container
export const getAllImages = async () => {
    const settings = {
        Bucket: "thoroffroad",
        Prefix: "images/",
    };

    try {
        const data = await spacesClient.listObjectsV2(settings);

        let objects = [];
        data.Contents.map((obj) => {
            const filename = path.parse(obj.Key).base; // get the full filename

            let object = obj.Key;

            objects.push(object);
        });

        // remove leading "images" from the path
        objects = objects.map(function (e) {
            return e.replace("images/", "");
        });

        objects = objects.filter((val) => val.includes(".jpg"));

        return objects;
    } catch (err) {
        console.log("Error", err);
    }
};
