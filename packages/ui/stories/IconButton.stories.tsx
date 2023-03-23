// IconButton.stories.ts|tsx

import { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "../IconButton";

const meta: Meta<typeof IconButton> = {
	title: "Atomic/IconButton",
	component: IconButton,
	args: {
		name: "HiAcademicCap",
	},
	// TODO: also add argTypes for other components
	argTypes: {
		size: {
			control: "radio",
			options: ["sm", "md", "lg", "xl"],
		},
		align: {
			control: "radio",
			options: ["left", "center", "right", "between", "around"],
		},
		ref: {
			control: false,
		},
	},
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
	args: {
		intent: "secondary",
	},
};

export const Round: Story = {
	args: { isRound: true, children: "IconButton" },
};

export const CustomIcon: Story = {
	args: {
		children: "IconButton",
	},
};
