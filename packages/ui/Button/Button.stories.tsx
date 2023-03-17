// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

// import directly from the component file
import { Button } from "./";

const meta: Meta<typeof Button> = {
	title: "Button",
	component: Button,
	tags: ["autodocs"],
	args: {
		children: "Button",
	},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	args: {},
};
