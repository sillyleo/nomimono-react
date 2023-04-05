import { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";
import { LucideIcon } from "../LucideIcon";

const meta: Meta<typeof Button> = {
  title: "Atomic/Button",
  component: Button,
  args: {
    children: "Button",
    leftIcon: <LucideIcon name={"plus"} />
  }
  // argTypes: {
  // 	isRound: {
  // 		control: "boolean",
  // 	},
  // },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  // args: {
  // 	intent: "primary",
  // },
};