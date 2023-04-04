import { Meta, StoryObj } from "@storybook/react";
import { HeroIcon } from ".";

const meta: Meta<typeof HeroIcon> = {
  title: "Icons/HeroIcon",
  component: HeroIcon
  // args: {
  // 	children: "HeroIcon",
  // },
  // argTypes: {
  // 	isRound: {
  // 		control: "boolean",
  // 	},
  // },
};

export default meta;
type Story = StoryObj<typeof HeroIcon>;

export const Default: Story = {
  // args: {
  // 	intent: "primary",
  // },
};