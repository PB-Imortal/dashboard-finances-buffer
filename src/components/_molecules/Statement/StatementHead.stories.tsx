import type { Meta, StoryObj } from '@storybook/react';

import { StatementHead } from './StatementHead';

const meta = {
  title: 'molecules/StatementHeader',
  component: StatementHead,
  tags: ["autodocs"]
} satisfies Meta<typeof StatementHead>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};