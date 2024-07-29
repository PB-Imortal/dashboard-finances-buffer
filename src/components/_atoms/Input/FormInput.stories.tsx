import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import LockIcon from "../../../common/svg/LockIcon";
import SearchIcon from "../../../common/svg/SearchIcon";
import FormInput from "./FormInput";

const meta: Meta<typeof FormInput> = {
  title: "atoms/FormInput",
  component: FormInput,
  tags: ["autodocs"],
  args: { onChange: fn() },
  argTypes: { onChange: { action: "change" } },
};

type Story = StoryObj<typeof FormInput>;

export default meta;

export const Input: Story = {
  args: {
    label: "FormInput",
  },
};

export const InputStartSVG: Story = {
  args: {
    label: "FormInput",
    startSvg: <LockIcon />,
  },
};

export const InputEndtSVG: Story = {
  args: {
    label: "FormInput",
    endSvg: <SearchIcon />,
  },
};

export const InputError: Story = {
  args: {
    label: "FormInput",
    error: "Error",
  },
};
