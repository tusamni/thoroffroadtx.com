/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./src/**/*.{astro,html,js,mdx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", ...defaultTheme.fontFamily.sans],
                serif: ["Fairweather", ...defaultTheme.fontFamily.serif],
            },
            colors: {
                yellow: {
                    50: "#fffcef",
                    100: "#fff5d1",
                    200: "#ffefb4",
                    300: "#ffe997",
                    400: "#ffe279",
                    500: "#ffdc5c",
                    600: "#d1b44b",
                    700: "#a38d3b",
                    800: "#75652a",
                    900: "#473e1a",
                },
                red: {
                    50: "#f7e9e9",
                    100: "#e9c3c3",
                    200: "#da9c9c",
                    300: "#cc7575",
                    400: "#bd4e4e",
                    500: "#af2727",
                    600: "#902020",
                    700: "#701919",
                    800: "#511212",
                    900: "#310b0b",
                },
                blue: {
                    50: "#f4f9fb",
                    100: "#e1edf4",
                    200: "#cde2ed",
                    300: "#bad7e6",
                    400: "#a6cbdf",
                    500: "#93c0d8",
                    600: "#799db1",
                    700: "#5e7b8a",
                    800: "#445863",
                    900: "#29363c",
                },
                tan: {
                    50: "#fefefe",
                    100: "#fdfcfb",
                    200: "#fbf9f8",
                    300: "#faf7f5",
                    400: "#f8f5f3",
                    500: "#f7f3f0",
                    600: "#cbc7c5",
                    700: "#9e9c9a",
                    800: "#72706e",
                    900: "#454443",
                },
            },
            boxShadow: {
                solid: "5px 5px",
            },
        },
    },
    plugins: [require("@tailwindcss/line-clamp"), require("@tailwindcss/forms")],
};
