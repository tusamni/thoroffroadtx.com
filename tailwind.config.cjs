/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
	content: ["./src/**/*.{astro,html,js,json,md,mdx,ts}"],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			'white': colors.white,
			'black': colors.black,
			'neutral': colors.neutral,
			'stone': colors.stone,
			'yellow': colors.yellow,
			'torch-red': {
				'50': '#fff1f3',
				'100': '#ffdfe3',
				'200': '#ffc5cc',
				'300': '#ff9ca8',
				'400': '#ff6376',
				'500': '#ff334b',
				'600': '#f02840',
				'700': '#c90c23',
				'800': '#a60e20',
				'900': '#891321',
				'950': '#4b040d',
			},
			'shiraz': {
				'50': '#fef2f2',
				'100': '#fde7e6',
				'200': '#fbd0d0',
				'300': '#f7aaaa',
				'400': '#f27a7c',
				'500': '#e84b53',
				'600': '#d42a3a',
				'700': '#b11d2f',
				'800': '#961b2e',
				'900': '#801b2e',
				'950': '#470a14',
			},
			'chathams-blue': {
				'50': '#eefaff',
				'100': '#dcf4ff',
				'200': '#b2ecff',
				'300': '#6ddfff',
				'400': '#20d0ff',
				'500': '#00baff',
				'600': '#0096df',
				'700': '#0077b4',
				'800': '#006494',
				'900': '#004d72',
				'950': '#003451',
			},
			'rock': {
				'50': '#f5f4f1',
				'100': '#e7e1da',
				'200': '#d0c4b8',
				'300': '#b5a18f',
				'400': '#a0846f',
				'500': '#917461',
				'600': '#7c5f52',
				'700': '#644b44',
				'800': '#56413d',
				'900': '#443432',
				'950': '#2a1f1e',
			},
			'merlin': {
				'50': '#f6f5f5',
				'100': '#e9e6e4',
				'200': '#d5cfcc',
				'300': '#b7aea9',
				'400': '#92867e',
				'500': '#776b63',
				'600': '#655c55',
				'700': '#554e49',
				'800': '#4a4540',
				'900': '#44403c',
				'950': '#292623',
			},

		},
		extend: {
			animation: {
				'icon-scroll': 'infinite-scroll 70s linear infinite',
				'build-scroll': 'infinite-scroll 90s linear infinite reverse',
			},
			keyframes: {
				'infinite-scroll': {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(-100%)' },
				}
			},
			fontFamily: {
				'alt': ['"LeagueSpartan"', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	safelist: [
		{
			pattern: /bg-(torch-red|shiraz|chathams-blue|rock|merlin)-(50|100|200|300|400|500|600|700|800|900|950)/, // You can display all the colors that you need
		},
	],
	plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography"), require("@tailwindcss/container-queries")],
};
