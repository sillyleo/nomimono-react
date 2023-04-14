import { Meta, StoryObj } from "@storybook/react";
import { SlotContainer } from ".";

const meta: Meta<typeof SlotContainer> = {
	title: "Atomic/Layout/Slot/Container",
	component: SlotContainer,
	args: {
		children: "SlotContainer",
	},
	// argTypes: {
	// 	isRound: {
	// 		control: "boolean",
	// 	},
	// },
};

export default meta;
type Story = StoryObj<typeof SlotContainer>;

export const Default: Story = {
	// args: {
	// 	intent: "primary",
	// },
};
