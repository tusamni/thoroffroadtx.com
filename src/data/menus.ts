const vehicleList = import.meta.glob("../pages/vehicles/**/*.mdx")
console.log(vehicleList)

export const vehicles = [
    {
        name: "Chevrolet",
        listing: [
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
        listing: [
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
        listing: [
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
        listing: [
            "Gladiator",
            "Wrangler",
        ],
        logo: "brands/manufacturers/jeep",
        url: "/jeep"
    },
    {
        name: "Lexus",
        listing: [
            "GX",
            "LX",
        ],
        logo: "brands/manufacturers/lexus",
        url: "/toyota-lexus"
    },
    {
        name: "RAM",
        listing: [
            "1500",
            "2500",
            "3500"
        ],
        logo: "brands/manufacturers/ram",
        url: "/ram"
    },
    {
        name: "Toyota",
        listing: [
            "4Runner",
            "Land Cruiser",
            "Tundra"
        ],
        logo: "brands/manufacturers/toyota",
        url: "/toyota-lexus"
    },
    {
        name: "UTV",
        listing: [
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
        listing: [
            "Bed covers",
            "roof racks",
            "cargo solutions"
        ],
        logo: "car-parts/door_outline",
        url: "/listing/bed-roof"
    },
    {
        name: "Body & Bumper",
        listing: [
            "Bumpers",
            "grill guards",
            "fenders",
            "side rails"
        ],
        logo: "car-parts/pickup_outline",
        url: "/listing/body-bumper"
    },
    {
        name: "Lighting",
        listing: [
            "LED headlight upgrades",
            "pocket lights",
            "light bars",
        ],
        logo: "car-parts/lighting_outline",
        url: "/listing/lighting"
    },
    {
        name: "Performance",
        listing: [
            "Engine",
            "fuel delivery",
            "exhaust",
            "brake upgrades",
        ],
        logo: "car-parts/tachometer_outline",
        url: "/listing/performance"
    },
    {
        name: "Specialties",
        listing: [
            "Custom fuel tanks",
            "gun racks",
            "custom fabrication",
        ],
        logo: "car-parts/pistons_outline",
        url: "/listing/specialties"
    },
    {
        name: "Suspension",
        listing: [
            "Carli suspension",
            "air ride",
            "shocks",
            "springs",
        ],
        logo: "car-parts/coilover_outline",
        url: "/listing/suspension"
    },
    {
        name: "Wheel & Tire",
        listing: [
            "Off-road wheel and tire combos",
        ],
        logo: "car-parts/wheel_outline",
        url: "/listing/wheel-tire"
    }
]