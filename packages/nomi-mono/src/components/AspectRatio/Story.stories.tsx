import { Meta, StoryObj } from "@storybook/react";
import { AspectRatio } from ".";

const meta: Meta<typeof AspectRatio> = {
	title: "Atomic/AspectRatio",
	component: AspectRatio,
	args: {
		children: "AspectRatio",
	},
	// argTypes: {
	// 	isRound: {
	// 		control: "boolean",
	// 	},
	// },
};

export default meta;
type Story = StoryObj<typeof AspectRatio>;

export const Default: Story = {
	// args: {
	// 	intent: "primary",
	// },
};
