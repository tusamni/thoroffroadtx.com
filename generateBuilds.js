import PublicGoogleSheetsParser from "public-google-sheets-parser";
import YAML from "yaml";
import * as fs from "fs";
import * as path from "path";

const spreadsheetId = "1_-PZIdaMz79QaG4-MBF53IQ96bkhiqyI92Ewt2cuiRU";
const parser = new PublicGoogleSheetsParser(spreadsheetId);
const builds = await parser.parse();

buildImages();

async function buildImages() {
    let buildsFolder = `src/content/builds`;

    // clear the builds directory first
    fs.readdir(buildsFolder, (err, files) => {
        if (err) throw err;

        for (const file of files) {
            fs.unlink(path.join(buildsFolder, file), (err) => {
                if (err) throw err;
            });
        }
    });

    for (const build of builds) {
        // // count through the total number of required images
        // // retain three leading zeros and start at 1
        let localMdx = `${buildsFolder}/${build.path}.mdx`;

        // check to see if file exists already
        // if not, get the metadata and write the file
        let rawYaml = YAML.stringify(build); // convert the json to yaml
        let mdx = `---\n${rawYaml}---`; // add frontmatter markers and a new line

        fs.mkdir(buildsFolder, { recursive: true }, function (err) {
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
