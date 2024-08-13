import type { Meta, StoryObj } from '@storybook/react';
import { StatementContext } from './StatementContextProvider';
import { StatementHead } from './StatementHead';

const meta = {
  title: "molecules/StatementHeader",
  component: StatementHead,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <StatementContext.Provider value={{ userAccounting }}>
          <Story />
      </StatementContext.Provider>
    ),
  ],
} satisfies Meta<typeof StatementHead>;

const userAccounting = {
  money: 1000,
  expenses: 524.41,
  earnings: 413.31,
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};