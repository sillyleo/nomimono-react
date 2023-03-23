// Button.stories.ts|tsx

import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";

const meta: Meta<typeof Button> = {
	title: "Atomic/Button",
	component: Button,
	args: {
		children: "Button",
	},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
	args: {
		intent: "primary",
	},
};
