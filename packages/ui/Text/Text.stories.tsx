// Button.stories.ts|tsx

import { Meta, StoryObj } from "@storybook/react";
import { Text } from ".";

const meta: Meta<typeof Text> = {
	title: "Atomic/Text",
	component: Text,
	args: {
		children: "Text",
		css: {
			color: "$baseText",
		},
	},
};

export default meta;
type Story = StoryObj<typeof Text>;

export const PageTitle: Story = {
	args: {
		size: "page-title",
		children: "Nomimono",
	},
};

export const PageTitle2: Story = {
	args: {
		size: "page-title2",
	},
};

export const Title1: Story = {
	args: {
		size: "title1",
	},
};

export const Title2: Story = {
	args: {
		size: "title2",
	},
};

export const Title3: Story = {
	args: {
		size: "title3",
	},
};

export const Subtitle1: Story = {
	args: {
		size: "subtitle1",
	},
};

export const Subtitle2: Story = {
	args: {
		size: "subtitle2",
	},
};

export const Overline: Story = {
	args: {
		size: "overline",
	},
};

export const Body: Story = {
	args: {
		size: "body",
	},
};

export const BodyBold: Story = {
	args: {
		size: "body-bold",
	},
};

export const Label: Story = {
	args: {
		size: "label",
	},
};

export const Caption: Story = {
	args: {
		size: "caption",
	},
};

export const Typeset: Story = {
	render: () => {
		return (
			<div
				style={{
					// flex vertical layout gap 16px
					display: "flex",
					flexDirection: "column",
					gap: "24px",
				}}
			>
				{/* all text type here */}
				<Text size="page-title">Page Title</Text>
				<Text size="page-title2">Page Title 2</Text>
				<Text size="title1">Title 1</Text>
				<Text size="title2">Title 2</Text>
				<Text size="title3">Title 3</Text>
				<Text size="subtitle1">Subtitle 1</Text>
				<Text size="subtitle2">Subtitle 2</Text>
				<Text size="overline">Overline</Text>
				<Text size="body">Body</Text>
				<Text size="body-bold">Body Bold</Text>
				<Text size="label">Label</Text>
				<Text size="caption">Caption</Text>
			</div>
		);
	},
};
