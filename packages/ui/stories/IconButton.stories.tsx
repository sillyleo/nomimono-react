// IconButton.stories.ts|tsx

import { Meta, StoryObj } from "@storybook/react";
import { HeroIcon } from "../components/HeroIcon";
import { IconButton } from "../components/IconButton";
import { LucideIcon } from "../components/LucideIcon";

const meta: Meta<typeof IconButton> = {
	title: "Stitches/IconButton",
	component: IconButton,
	args: {
		name: "HiAcademicCap",
		intent: "secondary",
	},
	// TODO: also add easier-to-use argTypes for other components
	argTypes: {
		size: {
			control: "radio",
			options: ["sm", "md", "lg", "xl"],
		},
		align: {
			control: "radio",
			options: ["left", "center", "right", "between", "around"],
		},
		ref: {
			control: false,
		},
	},
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
	args: {
		intent: "secondary",
	},
};

export const Round: Story = {
	args: { isRound: true },
};

export const CustomIconLucide: Story = {
	args: {
		isRound: true,
		children: <LucideIcon boxSize={"60%"} name="backpack" />,
	},
};

export const CustomIconHeroIconSolid: Story = {
	args: {
		isRound: true,
		children: <HeroIcon iconStyle="solid" boxSize={"60%"} name="ArchiveBox" />,
	},
};
