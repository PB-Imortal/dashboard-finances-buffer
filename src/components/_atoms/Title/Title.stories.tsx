import { Meta, StoryObj } from "@storybook/react";
import Title from "./Title";
import { BrowserRouter } from "react-router-dom";

const meta: Meta<typeof Title> = {
  title: "atoms/Title",
  component: Title,
  tags: ["autodocs"],
  args: {
    children: "Title",
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

type Story = StoryObj<typeof Title>;

export default meta;

export const Default: Story = {};