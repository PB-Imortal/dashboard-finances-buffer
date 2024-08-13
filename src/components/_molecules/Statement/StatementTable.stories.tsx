import type { Meta, StoryObj } from '@storybook/react';
import { StatementContext } from './apiEntities';
import { StatementTable } from './StatementTable';

const meta = {
  title: 'molecules/StatementTable',
  component: StatementTable,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <StatementContext.Provider value={{ filteredData  }}>
          <Story />
      </StatementContext.Provider>
    ),
  ],
} satisfies Meta<typeof StatementTable>;

const filteredData = [
    {
      description: "Spotify",
      id: "#31426590",
      type: "Shopping",
      card: "1241432",
      date: "28/01/2024",
      amount: -2500,
    },
    {
      description: "Freepik Sales",
      id: "#31426589",
      type: "Transfer",
      card: "1241432",
      date: "25/01/2024",
      amount: 750,
    },
    {
      description: "Mobile Service",
      id: "#31426588",
      type: "Transfer",
      card: "1241432",
      date: "20/01/2024",
      amount: -150,
    },
  ];

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};