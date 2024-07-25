import { render, screen } from '@testing-library/react'

import { TableData } from './TableData'

describe('TableData molecule', () => {

    it('should render children text argument', () => {
        render(<TableData>Data</TableData>)
        const tableData = screen.getByText('Data')
        expect(tableData).toBeInTheDocument()
    })

    it('should render children tsx argument', () => {
        render(<TableData><span data-testid='1'></span></TableData>)
        const span = screen.getByTestId('1')
        expect(span).toBeInTheDocument()
    })

    it('should include tailwind style to className property', () => {
        render(<TableData variantStyle="class">Data</TableData>)
        const tableData = screen.getByText('Data')
        expect(tableData).toHaveClass('class')
    })

})