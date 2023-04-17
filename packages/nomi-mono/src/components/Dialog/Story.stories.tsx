import { Meta, StoryObj } from "@storybook/react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from ".";

const DialogDemo = () => {
	return (
		<Dialog>
			<DialogTrigger>Open</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Are you sure absolutely sure?</DialogTitle>
					<DialogDescription>
						This action cannot be undone. This will permanently delete your
						account and remove your data from our servers.
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
};
const meta: Meta<typeof DialogDemo> = {
	title: "Atomic/Dialog",
	component: DialogDemo,
	// args: {
	//   children: "DialogDemo"
	// }
	// argTypes: {
	// 	isRound: {
	// 		control: "boolean",
	// 	},
	// },
};

export default meta;
type Story = StoryObj<typeof DialogDemo>;

export const Default: Story = {
	render: () => {
		return <DialogDemo />;
	},
};
