const vehicles = await import.meta.glob("../data/vehicles/*.json", { eager: true });

// get all vehicle makes
export async function getMakes() {
    const makes = [];

    return makes;
}

// get all vehicle models associated with a make
export async function getModels(make) {
    const makeKey = Object.keys(vehicles).filter((key) => key.includes(make));

    Object.console.log(models);
}
