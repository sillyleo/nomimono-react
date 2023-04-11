import { Meta, StoryObj } from "@storybook/react";
import { IconButton } from ".";

const meta: Meta<typeof IconButton> = {
	title: "Atomic/IconButton",
	component: IconButton,
	args: {
		children: "IconButton",
	},
	// argTypes: {
	// 	isRound: {
	// 		control: "boolean",
	// 	},
	// },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
	// args: {
	// 	intent: "primary",
	// },
};
