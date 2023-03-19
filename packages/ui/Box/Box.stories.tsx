// Box.stories.ts|tsx

import { Meta, StoryObj } from "@storybook/react";
import { Box, Stack } from "./";

const meta: Meta<typeof Box> = {
	title: "Atomic/Box",
	component: Box,
	args: {
		children: (
			<>
				<Box css={{ bg: "$slate5", borderRadius: "$xl", boxSize: 60 }} />
			</>
		),
	},
};

export default meta;
type Story = StoryObj<typeof Box>;

// lowercase to avoid conflics
export const box: Story = {
	args: {},
};

export const stack: Story = {
	args: {
		children: (
			<Stack>
				<Box css={{ bg: "$slate5", borderRadius: "$xl", boxSize: 60 }} />
				<Box css={{ bg: "$slate5", borderRadius: "$xl", boxSize: 60 }} />
				<Box css={{ bg: "$slate5", borderRadius: "$xl", boxSize: 60 }} />
				<Box css={{ bg: "$slate5", borderRadius: "$xl", boxSize: 60 }} />
				<Box css={{ bg: "$slate5", borderRadius: "$xl", boxSize: 60 }} />
				<Box css={{ bg: "$slate5", borderRadius: "$xl", boxSize: 60 }} />
			</Stack>
		),
	},
};
