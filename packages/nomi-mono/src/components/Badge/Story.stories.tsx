import { Meta, StoryObj } from "@storybook/react";
import { Badge } from ".";

const meta: Meta<typeof Badge> = {
	title: "Atomic/Badge",
	component: Badge,
	args: {
		children: "Badge",
	},
	// argTypes: {
	// 	isRound: {
	// 		control: "boolean",
	// 	},
	// },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
	// args: {
	// 	intent: "primary",
	// },
};
