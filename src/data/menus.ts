import { getImage } from "@astrojs/image";

export const vehicles = [
    {
        name: "Chevrolet",
        models: [
            "Colorado",
            "Silverado",
            "Silverado HD",
            "Tahoe"
        ],
        logo: "brands/manufacturers/chevrolet",
        url: "/chevrolet-gmc"
    },
    {
        name: "Ford",
        models: [
            "Bronco",
            "F-150",
            "Ranger",
            "Raptor",
            "Super Duty"
        ],
        logo: "brands/manufacturers/ford",
        url: "/ford"
    },
    {
        name: "GMC",
        models: [
            "Canyon",
            "Sierra",
            "Sierra HD",
            "Yukon"
        ],
        logo: "brands/manufacturers/gmc",
        url: "/chevrolet-gmc"
    },
    {
        name: "Jeep",
        models: [
            "Gladiator",
            "Wrangler",
        ],
        logo: "brands/manufacturers/jeep",
        url: "/jeep"
    },
    {
        name: "Lexus",
        models: [
            "GX",
            "LX",
        ],
        logo: "brands/manufacturers/lexus",
        url: "/toyota-lexus"
    },
    {
        name: "RAM",
        models: [
            "1500",
            "2500",
            "3500"
        ],
        logo: "brands/manufacturers/ram",
        url: "/ram"
    },
    {
        name: "Toyota",
        models: [
            "4Runner",
            "Land Cruiser",
            "Tundra"
        ],
        logo: "brands/manufacturers/toyota",
        url: "/toyota-lexus"
    },
    {
        name: "UTV",
        models: [
            "Can-Am",
            "Polaris"
        ],
        logo: "brands/manufacturers/sxs",
        url: "/utv"
    }
]

export const parts = [
    {
        name: "Bed & Roof",
        description: "Expand the flexibility and cargo-carrying capability of your truck",
        logo: "car-parts/door_outline",
        url: "/parts/bed-roof"
    },
    {
        name: "Body & Bumper",
        description: "We have the highest quality bumpers, grill guards, fenders, side rails and more",
        logo: "car-parts/pickup_outline",
        url: "/parts/body-bumper"
    },
    {
        name: "Lighting",
        description: "High-performance LED headlight upgrades, pocket lights, light bars and more",
        logo: "car-parts/lighting_outline",
        url: "/parts/lighting"
    },
    {
        name: "Performance",
        description: "We sell and install proven engine, fuel delivery, exhaust and brake upgrades",
        logo: "car-parts/tachometer_outline",
        url: "/parts/performance"
    },
    {
        name: "Specialties",
        description: "Custom fuel tanks, gun racks, interior upgrades and custom fabrication",
        logo: "car-parts/pistons_outline",
        url: "/parts/specialties"
    },
    {
        name: "Suspension",
        description: "Get there fast, reliably, and in comfort with the perfect lift",
        logo: "car-parts/coilover_outline",
        url: "/parts/suspension"
    },
    {
        name: "Wheel & Tire",
        description: "We install performance wheel and tire combos, suited for your adventure",
        logo: "car-parts/wheel_outline",
        url: "/parts/wheel-tire"
    }
]