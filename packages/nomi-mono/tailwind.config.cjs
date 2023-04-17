/** @type {import("tailwindcss").Config} */
module.exports = {
	content: [
		"./index.html",
		"./*.mdx",
		"./src/components/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: ["class", '[data-theme="dark"]'],
	theme: {
		fontFamily: {
			heading: [
				"Sk-Modernist",
				"SkModernistBold",
				"Sk-Modernist-Bold",
				"sans-serif",
			],
			body: ["Inter", "Inter Tight", "sans-serif"],
			sans: ["Inter", "Inter Tight", "sans-serif"],
		},
		fontSize: {
			0: 12,
			1: 14,
			2: 16,
			3: 18,
			4: 20,
			5: 24,
			6: 32,
			7: 36,
			8: 48,
			9: 64,
		},
		letterSpacing: {
			0: "0%",
		},
		borderRadius: {
			s: "0.75rem",
			m: "1rem",
			l: "2rem",
			full: "24rem",
		},
		lineHeight: {
			0: "120%",
			1: "140%",
			2: "150%",
		},
		fontWeight: {
			regular: "400",
			medium: "500",
			bold: "700",
		},
		extend: {
			keyframes: {
				"accordion-down": {
					from: { height: 0 },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: 0 },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
			colors: {
				primary: {
					400: "#6defbf",
					500: "#3ceaaa",
					600: "#33c790",
				},
				secondary: {
					400: "#42cdeb",
					500: "#03bce4",
					600: "#03a0c2",
				},
				support: {
					blue: "#4ea3fe",
					purple: "#bf96f4",
					pink: "#eb8de1",
					silver: "#d3d5f2",
					yellow: "#e9d74d",
					orange: "#ffb459",
					red: "#f16769",
				},
				neutral: {
					0: "#ffffff",
					1: "#f9f8f9",
					2: "#eeedef",
					3: "#e4e2e4",
					4: "#c8c7cb",
					5: "#86848d",
					6: "#4a4656",
					7: "#000000",
				},
				sepcial: {
					black: "#000000",
					link: "#1abc80",
				},
				dark: {
					neutral: {
						0: "#000000",
						1: "#1c1c1f",
						2: "#28282c",
						3: "#34343a",
						4: "#504f57",
						5: "#7e7d86",
						6: "#a2a0a8",
						7: "#ffffff",
					},
					special: {
						black: "#000000",
						link: "#3ceaaa",
					},
				},
			},
		},
	},
	plugins: [require("@tailwindcss/forms"), require("tailwindcss-animate")],
};
