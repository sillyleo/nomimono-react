// Button.stories.ts|tsx

import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../components/Button";

const meta: Meta<typeof Button> = {
	title: "Stitches/Button",
	component: Button,
	args: {
		children: "Button",
	},
	argTypes: {
		isRound: {
			control: "boolean",
		},
	},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
	args: {
		intent: "primary",
	},
};
