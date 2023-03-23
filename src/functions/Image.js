export function isPortrait(img) {
    var w = img.width,
        h = img.height;
    return h > w ? `aspect-[9/16]` : `aspect-[3/2]`;
}
