/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,json,md,mdx,ts}"],
    theme: {
        extend: {
            colors: {
                primary: "#EF233C",
            },
        },
        letterSpacing: {
            tightest: "-.85em",
            tighter: "-.075em",
            tight: "-.05em",
            normal: "-.025em",
            wide: "0",
            wider: ".025em",
            widest: ".05em",
        },
    },
    plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography"), require("@tailwindcss/container-queries")],
};
