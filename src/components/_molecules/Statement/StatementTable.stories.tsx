import type { Meta, StoryObj } from '@storybook/react';

import { StatementTable } from './StatementTable';

const meta = {
  title: 'molecules/StatementTable',
  component: StatementTable,
  tags: ['autodocs']
} satisfies Meta<typeof StatementTable>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};