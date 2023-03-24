// Tooltip.stories.ts|tsx

import { Meta, StoryObj } from "@storybook/react";
import { Text } from "../Text";
import { Tooltip } from "../Tooltip";

const meta: Meta<typeof Tooltip> = {
	title: "Atomic/Tooltip",
	component: Tooltip,
	args: {
		children: <Text>Hover me</Text>,
		label: "Tooltip",
	},
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
	args: {},
};
