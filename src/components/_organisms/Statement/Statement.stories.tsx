import { Meta, StoryObj } from "@storybook/react";
import Statement from "./Statement";
import { BrowserRouter } from "react-router-dom";
import { StatementContext } from "../../../providers/context/StatementContextProvider";

const meta: Meta<typeof Statement> = {
  title: "organisms/Statement",
  component: Statement,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <StatementContext.Provider value={{ userAccounting, filteredData }}>
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      </StatementContext.Provider>
    ),
  ],
};

const filteredData = [
  {
    description: "Spotify",
    id: "#31426590",
    type: "Shopping",
    card: "1241432",
    date: "29/01/2024",
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
    date: "23/01/2024",
    amount: -150,
  },
];

const userAccounting = {
  money: 1000,
  expenses: 524.41,
  earnings: 413.31,
};


export default meta;

type Story = StoryObj<typeof Statement>;

export const Default: Story = {};
