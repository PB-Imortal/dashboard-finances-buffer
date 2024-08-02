import { Meta, StoryObj } from "@storybook/react";
import Home from "./Home";
import { BrowserRouter } from "react-router-dom";

const meta: Meta<typeof Home> = {
  title: "organism/Home",
  component: Home,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

type Story = StoryObj<typeof Home>;

export default meta;

export const Default: Story = {};
