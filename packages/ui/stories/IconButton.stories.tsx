// IconButton.stories.ts|tsx

import { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "../IconButton";

const meta: Meta<typeof IconButton> = {
	title: "Atomic/IconButton",
	component: IconButton,
	args: {
		name: "HiAcademicCap",
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
