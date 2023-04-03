// Input.stories.ts|tsx

import { Meta, StoryObj } from "@storybook/react";
import { Slot, SlotWrapper } from "../components/Slot";
import { BaseInput } from "../components/Input";

const meta: Meta<typeof SlotWrapper> = {
	title: "stitches/layout/SlotWrapper",
	component: SlotWrapper,
	parameters: {
		docs: {
			description: {
				component:
					"A wrapper to position its slots in a relative container. Needs better documentation.",
			},
		},
	},
	// argTypes: {
	// 	align: {
	// 		control: "radio",
	// 		options: ["left", "center", "right"],
	// 	},
	// 	fontSize: {
	// 		control: "radio",
	// 		options: [
	// 			"xs",
	// 			"sm",
	// 			"base",
	// 			"lg",
	// 			"xl",
	// 			"2xl",
	// 			"3xl",
	// 			"4xl",
	// 			"5xl",
	// 			"6xl",
	// 		],
	// 	},
	// },
};

export default meta;
type Story = StoryObj<typeof SlotWrapper>;

export const slotWrapper: Story = {
	render: () => (
		<SlotWrapper
			as="label"
			css={{
				w: 400,
				h: 200,
			}}
		>
			<Slot css={{ boxSize: 40, bgTone5: "mauve" }} position="bottomLeft" />
			<Slot css={{ boxSize: 40, bgTone5: "mauve" }} position="bottomRight" />
			<Slot css={{ boxSize: 40, bgTone5: "mauve" }} position="topRight" />
			<Slot css={{ boxSize: 40, bgTone5: "mauve" }} position="topLeft" />
			<Slot css={{ boxSize: 40, bgTone5: "mauve" }} position="top" />
			<Slot css={{ boxSize: 40, bgTone5: "mauve" }} position="bottom" />
			<Slot css={{ boxSize: 40, bgTone5: "mauve" }} position="left" />
			<Slot css={{ boxSize: 40, bgTone5: "mauve" }} position="right" />

			<BaseInput align="center" asBackdrop />
		</SlotWrapper>
	),
};

export const slot: Story = {
	render: () => (
		<Slot css={{ boxSize: 40, bgTone5: "mauve" }} position="bottomLeft" />
	),
};
