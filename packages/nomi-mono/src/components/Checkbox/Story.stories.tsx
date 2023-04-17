import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from ".";
import { Text } from "../Text";

const meta: Meta<typeof Checkbox> = {
	title: "Atomic/Checkbox",
	component: Checkbox,
	args: {
		children: "Checkbox",
	},
	// argTypes: {
	// 	isRound: {
	// 		control: "boolean",
	// 	},
	// },
};

const CheckboxDemo = () => {
	return (
		<div className="items-center flex space-x-2">
			<Checkbox id="terms1" />
			<Text
				className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
				asChild
			>
				<label htmlFor="terms1">Accept terms and conditions</label>
			</Text>
		</div>
	);
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
	// args: {
	// 	intent: "primary",
	// },
};

export const WithLabel: Story = {
	render: CheckboxDemo,
};
