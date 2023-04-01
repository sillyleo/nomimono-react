// Tooltip.stories.ts|tsx

import { Meta, StoryObj } from "@storybook/react";
import { Text } from "../../components/Text";
import { Tooltip } from "../../components/Tooltip";

const meta: Meta<typeof Tooltip> = {
	title: "Stitches/Tooltip",
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
