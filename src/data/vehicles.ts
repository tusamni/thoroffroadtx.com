import { getImage } from "@/functions/Media"

export const vehicles = [
    {
        title: "Ford",
        url: "/ford",
        logo: "brands/manufacturers/ford",
        photo: await getImage("vehicles/ford/f-250/2206-2022-ford-f-250-stone-grey/2022-ford-f-250-stone-grey_006"),
        models: [
            {
                title: "Bronco",
                url: "/ford/bronco",
                description: "One of the most iconic vehicle badges in the world, the Ford Bronco has been reinvented for a whole new generation of drivers and off-road enthusiasts. THOR is your Ford Bronco headquarters and we are ready to guide you through the nearly endless options for your build. With products from RPG and Baja Kits the performance and capability of the new Bronco is endless.",
                photo: await getImage("vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-wild-track-antimatter-blue_019"),
                featured: [
                    await getImage("vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-badlands-oxford-white_015"),
                    await getImage("vehicles/ford/bronco/2112-2021-ford-bronco-badlands-oxford-white/2021-ford-bronco-badlands-oxford-white_017"),
                    await getImage("vehicles/ford/bronco/2204-2021-ford-bronco-outer-banks-black/2021-ford-bronco-outer-banks-black_004"),
                    await getImage("vehicles/ford/bronco/2206-2021-ford-bronco-wild-track-antimatter-blue/2021-ford-bronco-wild-track-antimatter-blue_013"),
                ]
            },
            {
                title: "F-150",
                url: "/ford/f-150",
                description: "As the best-selling vehicle in America, there is no limit to what you can do with the Ford F-150. THOR can help you build a comfortable daily commuter or work truck, a trusty ranch or farm vehicle, or even a supercharged off-road racer capable of absorbing anything you throw at it.",
                photo: await getImage("vehicles/ford/f-150/2109-2021-ford-f-150-lariat-ridge-runner-silver/2021-ford-f-150-lariat-ridge-runner-silver_018"),
            }
        ]
    },
    {
        title: "RAM",
        url: "/ram",
        logo: "brands/manufacturers/ram",
        photo: await getImage("vehicles/ram/1500/2100-2021-ram-1500-trx-white/2021-ram-1500-trx-white_003"),
        models: [
            {
                title: "1500",
                url: "/ram/1500",
                subtitle: "One of the most iconic vehicle badges in the world, the Ford Bronco has been reinvented for a whole new generation of drivers and off-road enthusiasts. THOR is your Ford Bronco headquarters and we are ready to guide you through the nearly endless options for your build. With products from RPG and Baja Kits the performance and capability of the new Bronco is endless.",
                photo: await getImage("vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_025"),
            },
            {
                title: "2500",
                url: "/ram/2500",
                subtitle: "One of the most iconic vehicle badges in the world, the Ford Bronco has been reinvented for a whole new generation of drivers and off-road enthusiasts. THOR is your Ford Bronco headquarters and we are ready to guide you through the nearly endless options for your build. With products from RPG and Baja Kits the performance and capability of the new Bronco is endless.",
                photo: await getImage("vehicles/ram/2500/2103-2016-ram-2500-black/2016-ram-2500-black_025"),
            }
        ]
    }
]