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

const renderWithUserContext = (ui: ReactElement, providerProps:any) => {
    return render(
        <StatementContext.Provider value={providerProps}>{ui}</StatementContext.Provider>
    );
};


describe('StatementHead molecule', () => {

    it('should render with correct data', () => {
        const providerProps = mockUserData;
        renderWithUserContext(<StatementHead />, providerProps);

        expect(screen.getByText('Money')).toBeInTheDocument()
        expect(screen.getByText('Expenses')).toBeInTheDocument()
        expect(screen.getByText('Earnings')).toBeInTheDocument()

        expect(screen.getByText('$100')).toBeInTheDocument()
        expect(screen.getByText('$50')).toBeInTheDocument()
        expect(screen.getByText('$150')).toBeInTheDocument()
    });

})
