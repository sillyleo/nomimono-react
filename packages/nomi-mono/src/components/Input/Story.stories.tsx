import { Meta, StoryObj } from "@storybook/react";
import { Input } from ".";

const meta: Meta<typeof Input> = {
  title: "Atomic/Input",
  component: Input,
  args: {
    type: "number"
  }
  // argTypes: {
  // 	isRound: {
  // 		control: "boolean",
  // 	},
  // },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  // args: {
  // 	intent: "primary",
  // },
};