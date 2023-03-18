import { stitchesDarkTheme, theme } from "./../stitches.config";
import { withThemeByClassName } from "@storybook/addon-styling";
import type { Preview } from "@storybook/react";

export const decorators = [
	withThemeByClassName({
		themes: {
			Light: "light",
			Dark: stitchesDarkTheme.className,
		},
		defaultTheme: "light",
	}),
];

const preview: Preview = {
	parameters: {
		backgrounds: {
			default: "Auto",
			values: [
				{
					name: "Auto",
					value: theme.colors["baseBackground"],
				},
				{
					name: "White",
					value: "#fff",
				},
				{
					name: "Black",
					value: "#000",
				},
			],
		},
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			expanded: false,
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
};

export default preview;
