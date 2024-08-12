import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { StatementContext } from "./apiEntities";
import { StatementFilter } from "./StatementFilter";
import { ReactElement } from "react";

function renderWithStatementContext( ui: ReactElement) {
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
    ]};
    render(
        <StatementContext.Provider value={{ userAccounting }}>
            {ui}
        </StatementContext.Provider>
    );
};

describe("StatementFilter", () => {

    it("should render primarly only the filter button", () => {
        renderWithStatementContext(<StatementFilter />);

        expect(screen.getAllByRole("button").length).toBe(1);
    });

    it("should render the modal", async () => {
        const user = userEvent.setup();
        renderWithStatementContext(<StatementFilter />);
        
        await user.click(screen.getByRole("button"));
        expect(screen.getAllByRole("button").length).toBe(3)
    });

    it("should render and close the modal", async () => {
        const user = userEvent.setup();
        renderWithStatementContext(<StatementFilter />);

        await user.click(screen.getByRole("button"));
        expect(screen.getAllByRole("button").length).toBe(3);

        await user.click(screen.getByText("Cancel"));
        expect(screen.getAllByRole("button").length).toBe(1);
    });

    it("should filter", async () => {
        const user = userEvent.setup();
        renderWithStatementContext(<StatementFilter />);
        
        await user.click(screen.getByRole("button"));

        await user.selectOptions(screen.getByLabelText("Type:"), "Credit");
        await user.selectOptions(screen.getByLabelText("Category:"), "Shopping");

        await user.click(screen.getByText("Submit"));

        expect(screen.getByText("No matching found.")).toBeInTheDocument();
    });

});