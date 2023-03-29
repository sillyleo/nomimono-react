// TailwindButton.stories.ts|tsx

import { Meta, StoryObj } from "@storybook/react";
import { TailwindButton } from "../components/TailwindButton";

const meta: Meta<typeof TailwindButton> = {
	title: "Tailwind/Button",
	component: TailwindButton.SecondaryButton,
	args: {
		children: "TailwindButton",
	},
	// argTypes: {
	// 	isRound: {
	// 		control: "boolean",
	// 	},
	// },
};

export default meta;
type Story = StoryObj<typeof TailwindButton>;

export const Default: Story = {
	// args: {
	// 	intent: "primary",
	// },
};
