/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
	content: ["./src/**/*.{astro,html,js,mdx,ts,tsx}"],
	theme: {
        extend: {
            fontFamily: {
                sans: [
                    "Inter", ...defaultTheme.fontFamily.sans,
                ],
                serif: [
                    "Fairweather", ...defaultTheme.fontFamily.serif,
                ]
            },
            colors: {
                "yellow": {
                    50: "#fffae5",
                    100: "#ffefb3",
                    200: "#ffe480",
                    300: "#ffd94d",
                    400: "#ffce1a",
                    500: "#e6b400",
                    600: "#b38c00",
                    700: "#806400",
                    800: "#4d3c00",
                    900: "#1a1400",
                },
                "red": {
                    50: "#faeaea",
                    100: "#f1c0c0",
                    200: "#e89797",
                    300: "#de6d6d",
                    400: "#d54343",
                    500: "#bc2a2a",
                    600: "#922121",
                    700: "#681717",
                    800: "#3f0e0e",
                    900: "#150505",
                },
                "blue": {
                    50: "#ecf4f8",
                    100: "#c7deeb",
                    200: "#a1c8dd",
                    300: "#7cb2d0",
                    400: "#569dc2",
                    500: "#3d83a9",
                    600: "#2f6683",
                    700: "#22495e",
                    800: "#142c38",
                    900: "#070f13",
                },
                "tan": {
                    50: "#f6f2ee",
                    100: "#e4d7cd",
                    200: "#d3bcac",
                    300: "#c1a28b",
                    400: "#af8769",
                    500: "#966e50",
                    600: "#74553e",
                    700: "#533d2c",
                    800: "#32251b",
                    900: "#110c09",
                },
                "neutral": {
                    50: "#0d0d0c",
                    100: "#dad8d7",
                    200: "#c1bfbd",
                    300: "#a9a5a3",
                    400: "#908b88",
                    500: "#77716f",
                    600: "#5c5856",
                    700: "#423f3e",
                    800: "#282625",
                    900: "#0d0d0c",
                }
            }
        },
	},
	plugins: [],
}
