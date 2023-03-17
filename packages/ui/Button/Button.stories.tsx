// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { Button } from "./";

const meta: Meta<typeof Button> = {
	title: "Button",
	component: Button,
	decorators: [withDesign],

	tags: ["autodocs"],
	args: {
		children: "Button",
	},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	args: {},
	parameters: {
		design: {
			type: "figma",
			url: "https://www.figma.com/file/QSPc25lxtbRsoqZE6CjcOm/Design-System-old?node-id=1520-4007&t=fJFbo5mEg4eXoDOc-4",
		},
	},
};
