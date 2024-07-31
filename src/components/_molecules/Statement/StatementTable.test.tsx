import userEvent from '@testing-library/user-event';

import { render, screen } from '@testing-library/react';
import { StatementTable } from './StatementTable';
import { StatementContext } from './apiEntities';
import { ReactNode } from 'react';

function renderWithStatementContext(ui: ReactNode, filter = '') {
    const userData = {
        accounting: {
            transactions: [
                {
                    description: 'Spotify',
                    id: '#31426590',
                    type: 'Shopping',
                    card: '1241432',
                    date: '28 Jan, 12.30 AM',
                    amount: -2500
                },
                {
                    description: 'Freepik Sales',
                    id: '#31426589',
                    type: 'Transfer',
                    card: '1241432',
                    date: '28 Jan, 12.30 AM',
                    amount: 750
                },
                {
                    description: 'Mobile Service',
                    id: '#31426588',
                    type: 'Transfer',
                    card: '1241432',
                    date: '28 Jan, 12.30 AM',
                    amount: -150
                },
            ],
            money: 1000,
            expenses: 524.41,
            earnings: 413.31
        },
    }
    return render(
        <StatementContext.Provider value={{filter, userData}}>
            {ui}
        </StatementContext.Provider>)

}

describe('StatementTable molecule', () => {
    
    afterEach (() => {
        window.innerWidth = 1024
    })
    
    it('should render two columns if the screen width is lower than 710px', () => {
        window.innerWidth = 709
        renderWithStatementContext(<StatementTable />)

        const rows = screen.getAllByRole('row')
        expect(rows).toHaveLength(4)
        rows.map(row => {expect(row.childElementCount).toBe(2)})
    })

    it('should render six columns if the screen width is highier than 710px and lower than 890px', () => {
        window.innerWidth = 710
        renderWithStatementContext(<StatementTable />)
        
        const rows = screen.getAllByRole('row')
        expect(rows).toHaveLength(4)
        rows.map(row => {expect(row.childElementCount).toBe(6)})
    })

    it('should render seven columns if the screen width is highier than 890px', () => {
        window.innerWidth = 891
        renderWithStatementContext(<StatementTable />)   

        const rows = screen.getAllByRole('row')
        expect(rows).toHaveLength(4)
        rows.map(row => {expect(row.childElementCount).toBe(7)})
    })

    it('should render the table body based on filter', () => {
        renderWithStatementContext(<StatementTable />, 'o')
        
        expect(screen.getByRole('table-body').childElementCount).toBe(2)
    })
})