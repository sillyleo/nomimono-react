// Footer.stories.ts|tsx

import { Meta, StoryObj } from "@storybook/react";
import { Footer } from "../../components/Footer";

const meta: Meta<typeof Footer> = {
	title: "Misc/Footer",
	component: Footer,
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
	args: {},
};
