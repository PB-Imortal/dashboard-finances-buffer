import type { Meta, StoryObj } from "@storybook/react";
import SideBar from "./SideBar";
import { BrowserRouter } from "react-router-dom";

const meta: Meta<typeof SideBar> = {
  title: "molecules/SideBar",
  component: SideBar,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

type Story = StoryObj<typeof SideBar>;

export default meta;

export const MySideBar: Story = {};