// BaseInput.stories.ts|tsx

import { Meta, StoryObj } from "@storybook/react";
import { BaseInput } from "../components/Input";

const meta: Meta<typeof BaseInput> = {
	title: "Stitches/Input/BaseInput",
	component: BaseInput,
	argTypes: {
		align: {
			control: "radio",
			options: ["left", "center", "right"],
		},
		fontSize: {
			control: "radio",
			options: [
				"xs",
				"sm",
				"base",
				"lg",
				"xl",
				"2xl",
				"3xl",
				"4xl",
				"5xl",
				"6xl",
			],
		},
	},
};

export default meta;
type Story = StoryObj<typeof BaseInput>;

export const Default: Story = {
	args: {},
};
export const Error: Story = {
	args: {
		className: "error",
	},
};
