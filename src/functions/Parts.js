const parts = await import.meta.glob("../data/parts/*.json", { eager: true });

// get all parts
export async function getParts() {
    // array for the parts
    const array = [];

    // map object keys into array
    Object.keys(parts).forEach((key) => {
        array.push(parts[key]);
    });

    return array;
}
