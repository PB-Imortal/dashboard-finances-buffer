import type { Meta, StoryObj } from '@storybook/react';

import { StatementFilter } from './StatementFilter';

const meta = {
  title: "molecules/StatementFilter",
  component: StatementFilter,
  tags: ["autodocs"],
} satisfies Meta<typeof StatementFilter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};