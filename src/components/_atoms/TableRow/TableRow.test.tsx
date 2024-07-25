import { render, screen } from '@testing-library/react';

import { TableRow } from './TableRow';

describe('TableRow atom', () => {

    it('should render children as text', () => {
        render(<TableRow>Data</TableRow>)
        const tableRow = screen.getByText('Data')
        expect(tableRow).toBeInTheDocument()
    })

    it('should render children as jsx', () => {
        render(<TableRow><td data-testid='1'></td></TableRow>)
        const tableData = screen.getByTestId('1')
        expect(tableData).toBeInTheDocument()
    })
    
})