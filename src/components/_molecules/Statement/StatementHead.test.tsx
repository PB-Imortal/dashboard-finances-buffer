import { render, screen } from "@testing-library/react";
import { ReactElement } from "react";
import { StatementContext } from "../../../providers/context/StatementContextProvider";
import { StatementHead } from "./StatementHead";

const mockUserAccounting = {
  money: 100,
  expenses: 50,
  earnings: 150,
};

type user = typeof mockUserAccounting;

const renderWithStatementContext = (ui: ReactElement, userAccounting: user) => {
  return render(
    <StatementContext.Provider value={{ userAccounting }}>{ui}</StatementContext.Provider>
  );
};

describe("StatementHead molecule", () => {
  it("should render with correct data", () => {
    renderWithStatementContext(<StatementHead />, { ...mockUserAccounting });

    expect(screen.getByText("Money")).toBeInTheDocument();
    expect(screen.getByText("Expenses")).toBeInTheDocument();
    expect(screen.getByText("Earnings")).toBeInTheDocument();

    expect(screen.getByText("$100")).toBeInTheDocument();
    expect(screen.getByText("$50")).toBeInTheDocument();
    expect(screen.getByText("$150")).toBeInTheDocument();
  });
});
