// BrandButton.stories.ts|tsx

import { Meta, StoryObj } from "@storybook/react";
import { BrandButton } from "../components/BrandButton";

const meta: Meta<typeof BrandButton> = {
	title: "Stitches/BrandButton",
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
