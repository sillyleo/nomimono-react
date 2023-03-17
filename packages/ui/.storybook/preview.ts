import { stitchesDarkTheme, theme } from "./../stitches.config";
import { withThemeByClassName } from "@storybook/addon-styling";
import type { Preview } from "@storybook/react";
console.log(stitchesDarkTheme);
export const decorators = [
	withThemeByClassName({
		themes: {
			light: "light",
			dark: "dark",
		},
		defaultTheme: "light",
	}),
];

const preview: Preview = {
	parameters: {
		backgrounds: {
			list: [{ name: "light", value: theme.colors.baseBackground }],
		},
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			expanded: true,
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
};

export default preview;
