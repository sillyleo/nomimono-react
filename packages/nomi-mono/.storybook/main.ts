import type { StorybookConfig } from "@storybook/react-webpack5";
const config: StorybookConfig = {
	framework: {
		name: "@storybook/react-webpack5",
		options: {},
	},

	stories: [
		"../*.mdx",
		"../src/stories/*.mdx",
		"../src/stories/*.stories.@(js|jsx|ts|tsx)",
		"../src/components/**/*.stories.@(js|jsx|ts|tsx)",
		"../src/components/**/*.mdx",
	],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		"@storybook/addon-docs",
		"@storybook/addon-styling",
		"@storybook/addon-mdx-gfm",
	],

	docs: {
		autodocs: true,
		defaultName: "Spec",
	},
};
export default config;
