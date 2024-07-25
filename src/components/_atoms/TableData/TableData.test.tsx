import { render, screen } from '@testing-library/react'

import { TableData } from './TableData'

describe('TableData molecule', () => {

    it('should render children as text', () => {
        render(<TableData>Data</TableData>)
        const tableData = screen.getByText('Data')
        expect(tableData).toBeInTheDocument()
    })

    it('should render children as jsx', () => {
        render(<TableData><span data-testid='1'></span></TableData>)
        const child = screen.getByTestId('1')
        expect(child).toBeInTheDocument()
    })

    it('should have a classes preset', () => {
        render(<TableData>Data</TableData>)
        const tableData = screen.getByText('Data')
        expect(tableData).toHaveClass('text-left border-t py-3 md:p-2') 
    })

    it('should include tailwind style to the class attribute', () => {
        render(<TableData variantStyle="class">Data</TableData>)
        const tableData = screen.getByText('Data')
        expect(tableData).toHaveClass('class')
    })

})