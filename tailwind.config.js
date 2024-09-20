const {nextui} = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "// Or if using src directory:\\n\\t\\t./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(card|input|select|tabs|ripple|listbox|divider|popover|button|spinner|scroll-shadow).js"
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
			primary: '47ebeb',
			default: '#47ebeb"',

		},
		extend: {
			colors: {
				primary: '#14141f',
				accent: {
					DEFAULT: "#47ebeb",
					hover: "#47ebeb",
				}
			}
		},
	},
  plugins: [nextui()],
}