import type { Meta, StoryObj } from "@storybook/react";
import FormLogin from "./FormLogin";
import { BrowserRouter } from "react-router-dom";

const meta: Meta<typeof FormLogin> = {
  title: "molecules/FormLogin",
  component: FormLogin,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

type Story = StoryObj<typeof FormLogin>;

export default meta;

export const DefaultFormLogin: Story = {};
