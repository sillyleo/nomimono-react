// BrandButton.stories.ts|tsx

import { Meta, StoryObj } from "@storybook/react";
import { BrandButton } from ".";

const meta: Meta<typeof BrandButton> = {
	title: "Atomic/BrandButton",
	component: BrandButton,
	args: {
		children: "BrandButton",
	},
};

export default meta;
type Story = StoryObj<typeof BrandButton>;

export const Default: Story = {
	args: {},
};
