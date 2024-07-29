import type { Meta, StoryObj } from "@storybook/react";
import NavBar from "./NavBar";
import { BrowserRouter } from "react-router-dom";

const meta: Meta<typeof NavBar> = {
  title: "molecules/NavBar",
  component: NavBar,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

type Story = StoryObj<typeof NavBar>;

export default meta;

export const MyNavBar: Story = {};
