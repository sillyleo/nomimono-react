import { brandFonts, stitchesDarkTheme, theme } from "./../stitches.config";
import { withThemeByClassName } from "@storybook/addon-styling";
import type { Preview } from "@storybook/react";
import DocTemplate from "./DocTemplate.mdx";
import "@fontsource/inter";
brandFonts();

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
			expanded: true,
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
		docs: {
			page: DocTemplate,
		},
	},
};

export default preview;
