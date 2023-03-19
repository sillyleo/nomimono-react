// Button.stories.ts|tsx

import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./";

const meta: Meta<typeof Button> = {
	title: "Atomic/Button",
	component: Button,
	args: {
		children: "Button",
	},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	args: {
		intent: "primary",
	},
};

export const Secondary: Story = {
	args: {
		intent: "secondary",
	},
};

export const Ghost: Story = {
	args: {
		intent: "ghost",
	},
};
