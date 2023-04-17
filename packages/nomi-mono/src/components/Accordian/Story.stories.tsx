import { Meta, StoryObj } from "@storybook/react";
import {
	Accordion,
	AccordionRoot,
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
} from ".";

const meta: Meta<typeof Accordion> = {
	title: "Atomic/Accordion",
	component: Accordion,
	args: {
		children: "Accordion",
	},
	// argTypes: {
	// 	isRound: {
	// 		control: "boolean",
	// 	},
	// },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
	// args: {
	// 	intent: "primary",
	// },
};
