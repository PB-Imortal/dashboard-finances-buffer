import { Meta, StoryObj } from "@storybook/react";
import Statement from "./Statement";
import { BrowserRouter } from "react-router-dom";
import { StatementContext } from "../../_molecules/Statement/apiEntities";

const meta: Meta<typeof Statement> = {
  title: "organisms/Statement",
  component: Statement,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <StatementContext.Provider value={{ userAccounting, filter }}>
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      </StatementContext.Provider>
    ),
  ],
};

const filter = "";
const userAccounting = {
  transactions: [
    {
      description: "Spotify",
      id: "#31426590",
      type: "Shopping",
      card: "1241432",
      date: "28 Jan, 12.30 AM",
      amount: -2500,
    },
    {
      description: "Freepik Sales",
      id: "#31426589",
      type: "Transfer",
      card: "1241432",
      date: "28 Jan, 12.30 AM",
      amount: 750,
    },
    {
      description: "Mobile Service",
      id: "#31426588",
      type: "Transfer",
      card: "1241432",
      date: "28 Jan, 12.30 AM",
      amount: -150,
    },
  ],
  money: 1000,
  expenses: 524.41,
  earnings: 413.31,
};
export default meta;

type Story = StoryObj<typeof Statement>;

export const Default: Story = {};
