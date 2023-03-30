/** @type {import('tailwindcss').Config} */

const theme = require("./tokens-light.json");
const dark = require("./tokens-dark.json");

module.exports = {
	// darkMode: "class",
	content: ["./components/**/*.{tsx,ts}", "./stories/**/*.{tsx,ts,mdx}"],
	theme: {
		fontFamily: {
			heading: [
				"Sk-Modernist",
				"SkModernistBold",
				"Sk-Modernist-Bold",
				"sans-serif",
			],
			body: ["Inter", "Inter Tight"],
		},
		fontSize: {
			...theme.fontSize,
		},
		lineHeight: {
			...theme.lineHeights,
		},
		fontWeight: {
			...theme.fontWeights,
		},
		extend: {
			colors: {
				...theme.color,
				dark: {
					...dark.color,
				},
				// dark: {
				// 	...dark.color,
				// },
				// neutral: theme.color["Neutral"],
				// primary: theme.color["Primary"],
				// secondary: theme.color["Secondary"],
				// support: theme.color["Support"],
				// neutralDark: dark.color["Neutral"],
			},
		},
	},
};
