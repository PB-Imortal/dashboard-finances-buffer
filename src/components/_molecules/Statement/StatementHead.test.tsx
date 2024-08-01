import { ReactElement } from 'react';
import { StatementContext } from './apiEntities';
import { render, screen } from "@testing-library/react";
import { StatementHead } from "./StatementHead";

const mockUserData = {
    accounting: {
        money: 100,
        expenses: 50,
        earnings: 150
    }
};

const renderWithStatementContext = (ui: ReactElement, providerProps:any) => {
    const userData = providerProps
    return render(
        <StatementContext.Provider value={{ userData }}>{ui}</StatementContext.Provider>
    );
};


describe('StatementHead molecule', () => {

    it('should render with correct data', () => {
        const providerProps = mockUserData;
        renderWithStatementContext(<StatementHead />, providerProps);

        expect(screen.getByText('Money')).toBeInTheDocument()
        expect(screen.getByText('Expenses')).toBeInTheDocument()
        expect(screen.getByText('Earnings')).toBeInTheDocument()

        expect(screen.getByText('$100')).toBeInTheDocument()
        expect(screen.getByText('$50')).toBeInTheDocument()
        expect(screen.getByText('$150')).toBeInTheDocument()
    });

})
