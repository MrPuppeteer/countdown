/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				workSans: ['Work Sans', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
