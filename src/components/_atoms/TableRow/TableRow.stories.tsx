import type { Meta, StoryObj } from '@storybook/react';
import { TableData } from '../TableData/TableData';
import { TableHeader } from '../TableHeader/TableHeader';
import { TableRow } from './TableRow';

const meta = {
  title: "atoms/TableRow",
  component: TableRow,
  tags: ["autodocs"]
} satisfies Meta<typeof TableRow>;

export default meta;

type Story = StoryObj<typeof TableRow>;

export const TableDataWrapper: Story = {
  args: {
    children: <TableData>Content</TableData>
  }
};

export const TableHeaderWrapper: Story = {
  args: {
    children: <TableHeader content="Header" />
  }
};