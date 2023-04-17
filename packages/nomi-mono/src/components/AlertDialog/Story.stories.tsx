import { Meta, StoryObj } from "@storybook/react";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from ".";
import { Button } from "../Button";
import { Text } from "../Text";

const AlertDialogDemo = () => {
	return (
		<AlertDialog>
			<AlertDialogTrigger>Open</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle asChild>
						<Text size="heading-s">Are you sure absolutely sure?</Text>
					</AlertDialogTitle>
					<AlertDialogDescription asChild>
						<Text>
							This action cannot be undone. This will permanently delete your
							account and remove your data from our servers.
						</Text>
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel asChild>
						<Button intent="text">Cancel</Button>
					</AlertDialogCancel>
					<AlertDialogAction asChild>
						<Button>Continue</Button>
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
};

const meta: Meta<typeof AlertDialogDemo> = {
	title: "Atomic/AlertDialog",
	component: AlertDialogDemo,
	// argTypes: {
	// 	isRound: {
	// 		control: "boolean",
	// 	},
	// },
};

export default meta;
type Story = StoryObj<typeof AlertDialogDemo>;

export const Default: Story = {
	// args: {
	// 	intent: "primary",
	// },
};
