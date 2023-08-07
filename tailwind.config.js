/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				black: {
					primary: "#161513",
					secondary: "#1C1C22",
				},
				white: {
					primary: "#F0F2F5",
					secondary: "#ffffff",
				},
			},
			fontFamily: {
				jakarta: ["Plus Jakarta Sans", "serif"],
			},
		},
	},
	plugins: [],
};
