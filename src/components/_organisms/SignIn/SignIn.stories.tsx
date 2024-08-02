import { Meta, StoryObj } from "@storybook/react";
import SignIn from "./SignIn";
import { BrowserRouter } from "react-router-dom";

const meta: Meta<typeof SignIn> = {
  title: "organisms/SignIn",
  component: SignIn,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof SignIn>;

export const Default: Story = {};
