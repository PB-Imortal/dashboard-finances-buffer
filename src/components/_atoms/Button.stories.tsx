import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import ButtonComponent from "./Button";

const meta: Meta<typeof ButtonComponent> = {
  title: "atoms/Button",
  component: ButtonComponent,
  tags: ["autodocs"],
  args: { children: "Botão", onClick: fn() },
  argTypes: { onClick: { action: "clicked" } },
};

type Story = StoryObj<typeof ButtonComponent>;

export default meta;

export const BlackButton: Story = {
  args: {
    bgcolor: "bg-bgblack",
    textColor: "text-txwhite",
  },
};

export const WhiteButton: Story = {
  args: {
    bgcolor: "bg-bgwhite",
    textColor: "text-txblack",
  },
};
