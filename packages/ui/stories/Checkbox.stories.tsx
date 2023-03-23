// Checkbox.stories.ts|tsx

import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "..";

const meta: Meta<typeof Checkbox> = {
	title: "Atomic/Checkbox",
	component: Checkbox,
	args: {
		children: "Checkbox",
	},
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
	args: {},
};
