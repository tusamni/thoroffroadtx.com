const vehicles = await import.meta.glob("../data/vehicles/*.json", { eager: true });

// get all vehicle makes
export function getMakes() {
    // array for the vehicles
    const array = [];

    // map object keys into the array
    Object.keys(vehicles).forEach((key) => {
        array.push(vehicles[key]);
    });

    return array;
}

// get all vehicle models associated with a make
export function getModels(make) {
    // filter the boject down to the selected make
    const filteredMakes = Object.keys(vehicles).filter((key) => key.includes(make));

    // return the simple object
    return vehicles[filteredMakes]["models"];
}
