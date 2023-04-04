import { Meta, StoryObj } from "@storybook/react";
import { LucideIcon } from ".";

const meta: Meta<typeof LucideIcon> = {
  title: "Icons/LucideIcon",
  component: LucideIcon
  // args: {
  // 	children: "LucideIcon",
  // },
  // argTypes: {
  // 	isRound: {
  // 		control: "boolean",
  // 	},
  // },
};

export default meta;
type Story = StoryObj<typeof LucideIcon>;

export const Default: Story = {
  // args: {
  // 	intent: "primary",
  // },
};