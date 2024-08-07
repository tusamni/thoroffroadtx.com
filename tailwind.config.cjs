/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ["./src/**/*.{astro,html,js,json,md,mdx,ts}"],
	theme: {
		extend: {
			fontFamily: {
				'alt': ['"LeagueSpartan"', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography"), require("@tailwindcss/container-queries")],
};
