// Input.stories.ts|tsx

import { Meta, StoryObj } from "@storybook/react";
import { Input } from "../Input";

const meta: Meta<typeof Input> = {
	title: "Atomic/Input/Input",
	component: Input,
	// argTypes: {
	// 	align: {
	// 		control: "radio",
	// 		options: ["left", "center", "right"],
	// 	},
	// 	fontSize: {
	// 		control: "radio",
	// 		options: [
	// 			"xs",
	// 			"sm",
	// 			"base",
	// 			"lg",
	// 			"xl",
	// 			"2xl",
	// 			"3xl",
	// 			"4xl",
	// 			"5xl",
	// 			"6xl",
	// 		],
	// 	},
	// },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
	args: {},
};
