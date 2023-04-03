// TailwindText.stories.ts|tsx

import { Meta, StoryObj } from "@storybook/react";
import { TailwindText } from "../components/TailwindText";

const meta: Meta<typeof TailwindText> = {
	title: "Tailwind/Text",
	component: TailwindText,
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
type Story = StoryObj<typeof TailwindText>;

export const Default: Story = {
	args: {},
};
