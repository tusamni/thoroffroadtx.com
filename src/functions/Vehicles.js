const vehicles = await import.meta.glob("../data/vehicles/*.json", { eager: true });

// get all vehicle makes
export async function getMakes() {
    const makes = [];

    // map the object into an array of vehicles makes
    Object.entries(vehicles).map(([key, value]) => makes.push(value.title));

    return makes;
}

// get all vehicle models associated with a make
export async function getModels(make) {
    // filter the boject down to the selected make
    const filteredMakes = Object.keys(vehicles).filter((key) => key.includes(make));

    // return the simple object
    return vehicles[filteredMakes.models];
}
