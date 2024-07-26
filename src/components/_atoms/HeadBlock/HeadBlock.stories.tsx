import MoneyIcon from "../../../assets/money-icon.svg";
import ExpensesIcon from "../../../assets/expanses-icon.svg";
import EarningsIcon from "../../../assets/earnings-icon.svg";

import type { Meta, StoryObj } from '@storybook/react';
import { HeadBlock } from './HeadBlock';

const meta = {
  title: 'atoms/HeadBlock',
  component: HeadBlock,
  tags: ['autodocs'],
  args: {
    data: {
      label: "Test",
      icon: ExpensesIcon,
      amount: 313}
  }
} satisfies Meta<typeof HeadBlock>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Money: Story = {
  args: {
    data: {
      label: "Money",
      icon: MoneyIcon,
      amount: 42344
    }
  }
};

export const Expenses: Story = {
  args: {
    data: {
      label: "Expenses",
      icon: ExpensesIcon,
      amount: 313
    }
  }
};

export const Earnings: Story = {
  args: {
    data: {
      label: "Earnings",
      icon: EarningsIcon,
      amount: 21920
    }
  }
};