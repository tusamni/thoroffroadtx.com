/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,json,md,mdx,ts}"],
    theme: {
        extend: {
            colors: {
                primary: "#EF233C",
            },
        },
    },
    plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography"), require("@tailwindcss/container-queries")],
};
