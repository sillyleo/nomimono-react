// Dialog.stories.ts|tsx

import { Meta, StoryObj } from "@storybook/react";
import { Text } from "../../components/Text";
import { Button } from "../../components/Button";
import { Dialog } from "../../components/Dialog";

const DialogDefault = () => {
	return (
		<Dialog.Root>
			<Dialog.Trigger asChild>
				<p>Open Dialog with Close + Scroll</p>
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
	title: "Stitches/Dialog",
	component: DialogDefault,
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
	args: {},
};
