import type { Meta, StoryObj } from "@storybook/react";

import Button from "../Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
	title: "Example/Button",
	component: Button,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
	tags: ["autodocs"],
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: Story = {
	// More on args: https://storybook.js.org/docs/react/writing-stories/args
	args: {},
};

export const Secondary: Story = {
	args: {},
};

export const Large: Story = {
	args: {},
};

export const Small: Story = {
	args: {},
};
