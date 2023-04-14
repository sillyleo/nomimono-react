import { Meta, StoryObj } from "@storybook/react";
import { Slot } from ".";

const meta: Meta<typeof Slot> = {
	title: "Atomic/Layout/Slot/Slot",
	component: Slot,
	args: {
		children: "Slot",
	},
	// argTypes: {
	// 	isRound: {
	// 		control: "boolean",
	// 	},
	// },
};

export default meta;
type Story = StoryObj<typeof Slot>;

export const Default: Story = {
	// args: {
	// 	intent: "primary",
	// },
};
