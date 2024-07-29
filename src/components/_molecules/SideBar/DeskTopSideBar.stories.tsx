import type { Meta, StoryObj } from "@storybook/react";
import DeskTopSideBar from "./DeskTopSideBar";
import { BrowserRouter } from "react-router-dom";

const meta: Meta<typeof DeskTopSideBar> = {
  title: "molecules/DeskTopSideBar",
  component: DeskTopSideBar,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

type Story = StoryObj<typeof DeskTopSideBar>;

export default meta;

export const MyDeskTopSideBar: Story = {};