// Checkbox.stories.ts|tsx

import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../../components/Checkbox";

const meta: Meta<typeof Checkbox> = {
	title: "Stitches/Checkbox/CheckboxOnly",
	component: Checkbox,
	parameters: {
		docs: {
			description: {
				component: "Use with label.",
			},
		},
	},
	args: {
		children: "Checkbox",
	},
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
	args: {},
};
