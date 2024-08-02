import { Meta, StoryObj } from "@storybook/react";
import FormCreateAccount from "./FormCreateAccount";
import { BrowserRouter } from "react-router-dom";

const meta: Meta<typeof FormCreateAccount> = {
  title: "molecules/FormCreateAccount",
  component: FormCreateAccount,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

type Story = StoryObj<typeof FormCreateAccount>;

export default meta;

export const Default: Story = {};
