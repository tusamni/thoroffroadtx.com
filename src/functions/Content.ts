// data
import { vehicles } from "@/data/vehicles";

// get the model data from the vehicle object
export function getMake(model) {
    return vehicles.find(v => v.title === model)
}

// // get the make data from the vehicle object
// export function getMake(make) {
//     return vehicles.find(m => m.title === make)
// }