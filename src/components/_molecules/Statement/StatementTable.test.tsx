import { render, screen } from "@testing-library/react";
import { StatementTable } from "./StatementTable";
import { StatementContext } from "../../../providers/context/StatementContextProvider";
import { ReactNode } from "react";

function renderWithStatementContext(ui: ReactNode) {
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
      date: "23/01/2024",
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
  return render(
    <StatementContext.Provider value={{ filteredData }}>
      {ui}
    </StatementContext.Provider>
  );
}

describe("StatementTable molecule", () => {
  it("should render two columns if the screen width is lower than 710px", () => {
    window.innerWidth = 709;
    renderWithStatementContext(<StatementTable />);

    const rows = screen.getAllByRole("row");
    expect(rows).toHaveLength(4);
    rows.map((row) => {
      expect(row.childElementCount).toBe(2);
    });
  });

  it("should render six columns if the screen width is highier than 710px and lower than 890px", () => {
    window.innerWidth = 710;
    renderWithStatementContext(<StatementTable />);

    const rows = screen.getAllByRole("row");
    expect(rows).toHaveLength(4);
    rows.map((row) => {
      expect(row.childElementCount).toBe(6);
    });
  });

  it("should render seven columns if the screen width is highier than 890px", () => {
    window.innerWidth = 891;
    renderWithStatementContext(<StatementTable />);

    const rows = screen.getAllByRole("row");
    expect(rows).toHaveLength(4);
    rows.map((row) => {
      expect(row.childElementCount).toBe(7);
    });
  });

});
