// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./";

const meta: Meta<typeof Button> = {
	title: "Button",
	component: Button,
	decorators: [
		(Story) => (
			<div
				style={{
					padding: "16px",
				}}
			>
				{/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
				<Story />
			</div>
		),
	],
	tags: ["autodocs"],
	args: {
		children: "Button",
	},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	args: {},
};
