import { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarFallback, AvatarImage } from ".";

const AvatarDemo = () => {
	return (
		<Avatar>
			<AvatarImage src="https://github.com/shadcn.png" />
			<AvatarFallback>CN</AvatarFallback>
		</Avatar>
	);
};

const meta: Meta<typeof Avatar> = {
	title: "Atomic/Avatar",
	component: AvatarDemo,
	// argTypes: {
	// 	isRound: {
	// 		control: "boolean",
	// 	},
	// },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
	// args: {
	// 	intent: "primary",
	// },
};
