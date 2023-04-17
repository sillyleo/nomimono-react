import { Meta, StoryObj } from "@storybook/react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from ".";
import { Button } from "../Button";
import { LucideIcon } from "../LucideIcon";
import { Text } from "../Text";

const meta: Meta<typeof Collapsible> = {
	title: "Atomic/Collapsible",
	component: Collapsible,
	args: {
		children: "Collapsible",
	},
	// argTypes: {
	// 	isRound: {
	// 		control: "boolean",
	// 	},
	// },
};

export default meta;
type Story = StoryObj<typeof Collapsible>;

export const Default: Story = {
	render: () => {
		return (
			<Collapsible>
				<CollapsibleTrigger asChild>
					<Button
						intent="text"
						rightIcon={<LucideIcon name={"ChevronsUpDown"} />}
					>
						More
					</Button>
				</CollapsibleTrigger>
				<CollapsibleContent>
					<div className="py-5">
						<Text size="body-s">
							Yes. Free to use for personal and commercial projects. No
							attribution required.
						</Text>
					</div>
				</CollapsibleContent>
			</Collapsible>
		);
	},
};
