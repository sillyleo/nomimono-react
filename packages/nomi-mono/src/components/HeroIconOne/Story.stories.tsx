import { Meta, StoryObj } from "@storybook/react";
import { HeroIconOne } from ".";

const meta: Meta<typeof HeroIconOne> = {
  title: "Icons/HeroIconOne",
  component: HeroIconOne
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
type Story = StoryObj<typeof HeroIconOne>;

export const Default: Story = {
  // args: {
  // 	intent: "primary",
  // },
};