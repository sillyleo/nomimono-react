// Box.stories.ts|tsx

import { Meta, StoryObj } from "@storybook/react";
import { Box, Stack } from "../components/Box";

const meta: Meta<typeof Box> = {
  title: "Layout/Box",
  component: Box,
  parameters: {
    docs: {
      description: {
        component: "Needs better documentation."
      }
    }
  },
  args: {
    children: (
      <>
        <Box
          css={{
            bg: "$baseText",
            opacity: 0.2,
            borderRadius: "$xl",
            boxSize: 60
          }}
        />
      </>
    )
  }
};

export default meta;
type Story = StoryObj<typeof Box>;

// lowercase to avoid conflics
export const box: Story = {
  args: {}
};

export const stack: Story = {
  args: {
    children: (
      //@ts-ignore
      <Stack>
        <Box
          css={{
            bg: "$baseText",
            opacity: 0.2,
            borderRadius: "$xl",
            boxSize: 60
          }}
        />
        <Box
          css={{
            bg: "$baseText",
            opacity: 0.2,
            borderRadius: "$xl",
            boxSize: 60
          }}
        />
        <Box
          css={{
            bg: "$baseText",
            opacity: 0.2,
            borderRadius: "$xl",
            boxSize: 60
          }}
        />
        <Box
          css={{
            bg: "$baseText",
            opacity: 0.2,
            borderRadius: "$xl",
            boxSize: 60
          }}
        />
        <Box
          css={{
            bg: "$baseText",
            opacity: 0.2,
            borderRadius: "$xl",
            boxSize: 60
          }}
        />
        <Box
          css={{
            bg: "$baseText",
            opacity: 0.2,
            borderRadius: "$xl",
            boxSize: 60
          }}
        />
      </Stack>
    )
  }
};