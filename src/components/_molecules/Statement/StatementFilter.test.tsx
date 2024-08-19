import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { StatementContext } from "../../../providers/context/StatementContextProvider";
import { StatementFilter } from "./StatementFilter";
import { ReactElement } from "react";

function renderWithStatementContext(ui: ReactElement) {
    const date = new Date;
    const currentDate = `00/${date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1}/${date.getFullYear()}`
    const mockContextValue = {
        setFilteredData: vi.fn(),
        userAccounting: {
            transactions: [
                {
                    description: "Spotify",
                    id: "#31426590",
                    type: "Shopping",
                    card: "x",
                    date: currentDate,
                    amount: -2500,
                },
                {
                    description: "Spotify",
                    id: "#31426589",
                    type: "Transfer",
                    card: "x",
                    date: currentDate,
                    amount: 750,
                },
            ]
        }
    };
    render(
        <StatementContext.Provider value={{ ...mockContextValue }}>
            {ui}
        </StatementContext.Provider>
    );
};

describe("StatementFilter", () => {

    it("should render initially only the filter button", () => {
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

    it("should display a message for no matches", async () => {
        const user = userEvent.setup();
        renderWithStatementContext(<StatementFilter />);

        await user.click(screen.getByRole("button"));

        await user.selectOptions(
            screen.getByLabelText("Type:"), "Credit");

        await user.selectOptions(
            screen.getByLabelText("Category:"), "Transfer");

        await user.type(
            screen.getByPlaceholderText("Search"), "Sputify");

        await user.click(screen.getByText("Submit"));

        expect(screen.getByText("No matches."))
            .toBeInTheDocument();
    });

    it("should close the modal when the filtering has matching transactions",
        async () => {
            const user = userEvent.setup();
            renderWithStatementContext(<StatementFilter />);

            await user.click(screen.getByRole("button"));
            expect(screen.getAllByRole("button").length).toBe(3);

            await user.click(screen.getByText("Submit"));
            expect(screen.getAllByRole("button").length).toBe(1);
        });

    it("should display error message for invalid search input", async () => {
        const user = userEvent.setup();
        renderWithStatementContext(<StatementFilter />);

        await user.click(screen.getByRole("button"));

        await user.type(
            screen.getByPlaceholderText("Search"), "21232")

        await user.click(screen.getByText("Submit"));
        expect(screen.getByText("Invalid term.")).toBeInTheDocument();
    });
});