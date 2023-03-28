import {
	brandFonts,
	reset,
	stitchesDarkTheme,
	theme,
} from "./../stitches.config";
import { withThemeByClassName } from "@storybook/addon-styling";
import type { Preview } from "@storybook/react";
import DocTemplate from "./DocTemplate.mdx";
import "@fontsource/inter"; // Defaults to weight 400.
import YourTheme from "./YourTheme";
import "/dist/style.css"

brandFonts();
//reset();

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
		options: {
			storySort: {
				order: ["Reademe", ["Atomic", "Components", "Recepies", "Templates"]],
			},
		},
		backgrounds: {
			default: "Auto",
			values: [
				{
					name: "Auto",
					value: theme.colors["baseBackgroundSecondary"],
				},
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
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
		docs: {
			theme: YourTheme,
			page: DocTemplate,
		},
	},
};

export default preview;