/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		container: {
			center: true,
			padding: "15px",
		},
		screens: {
			sm: '640px',
			md: '768px',
			lg: '960px',
			xl: '1200px',
		},
		fontFamily: {
			primary: ("var(--font-Inter)"),
		},
		button: {
			default: '#FDC52C"',

		},
		extend: {
			colors: {
				primary: '#F9F9FA',
				accent: {
					DEFAULT: "#FDC52C",
					hover: "#FDC52C",
				}
			}
		},
	},
	plugins: [],
}