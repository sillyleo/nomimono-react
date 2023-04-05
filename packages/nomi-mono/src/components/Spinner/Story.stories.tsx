import { Meta, StoryObj } from "@storybook/react";
import { Spinner } from ".";

const meta: Meta<typeof Spinner> = {
  title: "Atomic/Spinner",
  component: Spinner,
  args: {
    size: 48
  }
  // argTypes: {
  // 	isRound: {
  // 		control: "boolean",
  // 	},
  // },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  // args: {
  // 	intent: "primary",
  // },
};