/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        fontFamily: {
            cursive: ["Over the Rainbow", "cursive"],
        },

        extend: {},
    },
    plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography"), require("@tailwindcss/typography")],
};
