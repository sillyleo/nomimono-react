import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
	staticDirs: [{ from: "../public", to: "/" },{ from: "../dist", to: "/dist" }],
	stories: ["../**/*.mdx", "../**/*.stories.@(js|jsx|ts|tsx)"],
	addons: [
		"@storybook/addon-styling",
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		"storybook-addon-designs",
	],
	framework: {
		name: "@storybook/react-webpack5",
		options: {},
	},
	docs: {
		autodocs: true,
	},
};
export default config;