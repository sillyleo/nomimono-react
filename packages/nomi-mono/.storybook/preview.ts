import type { Preview } from "@storybook/react";
import "../dist/index.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";
import { withThemeByClassName } from "@storybook/addon-styling";
import { withThemeByDataAttribute } from "@storybook/addon-styling";

const preview: Preview = {
	parameters: {
		backgrounds: {
			default: "Auto",
			values: [
				{
					name: "White",
					value: "#fff",
				},
				{
					name: "Black",
					value: "#333",
				},
			],
		},
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			expanded: true,
			hideNoControlsWarning: true,
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
};

export const decorators = [
	withThemeByDataAttribute({
		themes: {
			light: "light",
			dark: "dark",
		},
		defaultTheme: "light",
		attributeName: "data-theme",
	}),
];

// export const decorators = [
// 	withThemeByClassName({
// 		themes: {
// 			light: "",
// 			dark: "dark",
// 		},
// 		defaultTheme: "light",
// 	}),
// ];

export default preview;
