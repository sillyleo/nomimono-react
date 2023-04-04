import { Meta, StoryObj } from "@storybook/react";
import { Template } from ".";

const meta: Meta<typeof Template> = {
  title: "Misc/Template",
  component: Template,
  args: {
    children: "Template"
  }
  // argTypes: {
  // 	isRound: {
  // 		control: "boolean",
  // 	},
  // },
};

export default meta;
type Story = StoryObj<typeof Template>;

export const Default: Story = {
  // args: {
  // 	intent: "primary",
  // },
};