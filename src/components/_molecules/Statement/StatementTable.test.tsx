import { render, screen } from "@testing-library/react";
import { StatementTable } from "./StatementTable";
import { StatementContext } from "./apiEntities";
import { ReactNode } from "react";

function renderStatementContext({ ui }: {ui: ReactNode}) {
    const mockContextValue = { filter: '', setfilter: '', userData: undefined}
    return (
        <StatementContext.Provider value={mockContextValue}>
            {ui}
        </StatementContext.Provider>
    )

}

describe('StatementTable molecule', () => {
    it('should render', () => {
        render(<StatementTable />)
        expect(screen.getByText('Description')).toBeInTheDocument()
    })
})