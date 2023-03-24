// BaseInput.stories.ts|tsx

import { Meta, StoryObj } from "@storybook/react";
import { BaseInput } from "../Input";

const meta: Meta<typeof BaseInput> = {
	title: "Atomic/BaseInput",
	component: BaseInput,
};

export default meta;
type Story = StoryObj<typeof BaseInput>;

export const Default: Story = {
	args: {},
};
