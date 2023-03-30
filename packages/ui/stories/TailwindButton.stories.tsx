// TailwindButton.stories.ts|tsx

import { Meta, StoryObj } from "@storybook/react";
import { TailwindButton } from "../components/TailwindButton";

const meta: Meta<typeof TailwindButton> = {
	title: "Tailwind/Button",
	component: TailwindButton.SecondaryButton,
	args: {
		children: "Button",
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

export const Click: Story = {
	render: (args) => {
		return (
			<TailwindButton.SecondaryButton
				onClick={() => {
					console.log("clicked");
				}}
				{...args}
			>
				Click me
			</TailwindButton.SecondaryButton>
		);
	},
};
