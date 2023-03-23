// Dialog.stories.ts|tsx

import { Meta, StoryObj } from "@storybook/react";
import { Text } from "..";
import { Button } from "../Button";
import { Dialog } from "../Dialog";

const DialogDefault = () => {
	return (
		<Dialog.Root>
			<Dialog.Trigger asChild>
				<Button>Open Dialog with Close + Scroll</Button>
			</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Overlay>
					<Dialog.ContentWithClose>
						{/* repeat paragraph 10 times */}
						{[...Array(20)].map((_, i) => (
							<Text key={i}>
								Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in
								massa egestas mollis varius; dignissim elementum. Mollis
								tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
								Hendrerit parturient habitant pharetra rutrum gravida porttitor
								eros feugiat. Mollis elit sodales taciti duis praesent id.
								Consequat urna vitae morbi nunc congue.
							</Text>
						))}
						<Dialog.Close asChild>
							<Button>Close Button in content</Button>
						</Dialog.Close>
					</Dialog.ContentWithClose>
				</Dialog.Overlay>
			</Dialog.Portal>
		</Dialog.Root>
	);
};
const meta: Meta<typeof Dialog> = {
	title: "Atomic/Dialog",
	component: DialogDefault,
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
	args: {},
};
