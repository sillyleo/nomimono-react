// RadioGroup.stories.ts|tsx

import { Meta, StoryObj } from "@storybook/react";
import { RadioGroup } from "../components/RadioGroup";

const meta: Meta<typeof RadioGroup> = {
	title: "Atomic/Radio/RadioGroup",
	component: RadioGroup,
	parameters: {
		docs: {
			description: {
				component: "Use with label.",
			},
		},
	},
	args: {
		children: "RadioGroup",
	},
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
	render: () => (
		<RadioGroup.Root
			className="RadioGroupRoot"
			defaultValue="default"
			aria-label="View density"
		>
			<RadioGroup.ItemWithLabel value="Default">
				Default
			</RadioGroup.ItemWithLabel>
			<RadioGroup.ItemWithLabel value="Compact">
				Compact
			</RadioGroup.ItemWithLabel>
			<RadioGroup.ItemWithLabel value="Comfortable">
				Comfortable
			</RadioGroup.ItemWithLabel>
		</RadioGroup.Root>
	),
};
