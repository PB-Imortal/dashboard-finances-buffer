import type { Meta, StoryObj } from "@storybook/react";
import ReturnHomeButton from "./ReturnHomeButton";
import { BrowserRouter } from "react-router-dom";

const meta: Meta<typeof ReturnHomeButton> = {
  title: "atoms/ReturnHomeButton",
  component: ReturnHomeButton,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

type Story = StoryObj<typeof ReturnHomeButton>;

export default meta;

export const Default: Story = {};