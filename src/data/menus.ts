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