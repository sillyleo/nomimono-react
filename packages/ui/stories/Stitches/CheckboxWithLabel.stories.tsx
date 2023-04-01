// Checkbox.stories.ts|tsx

import { Meta, StoryObj } from "@storybook/react";
import { CheckboxWithLabel } from "../../components/Checkbox";

const meta: Meta<typeof CheckboxWithLabel> = {
	title: "Stitches/Checkbox/WithLabel",
	component: CheckboxWithLabel,
	args: {
		children: "CheckboxWithLabel",
	},
};

export default meta;
type Story = StoryObj<typeof CheckboxWithLabel>;

export const Default: Story = {
	args: {},
};
