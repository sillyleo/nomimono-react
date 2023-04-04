import { Meta, StoryObj } from "@storybook/react";
import { Text } from "../components/Text";

const meta: Meta<typeof Text> = {
	title: "Text",
	component: Text,
	args: {
		children: "Text",
	},
	// argTypes: {
	// 	isRound: {
	// 		control: "boolean",
	// 	},
	// },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
	// args: {
	// 	intent: "primary",
	// },
};
