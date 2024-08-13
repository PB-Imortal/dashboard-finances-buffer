import type { Meta, StoryObj } from '@storybook/react';

import { FormSelect } from './FormSelect';

const meta = {
  title:"atoms/FormSelect",
  component: FormSelect,
  tags: ["autodocs"],
} satisfies Meta<typeof FormSelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Label:",
    forwId: "001",
    options: ["01", "02"]
  }
};