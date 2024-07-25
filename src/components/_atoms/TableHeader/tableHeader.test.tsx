import { render, screen } from '@testing-library/react';

import { TableHeader } from './TableHeader';

describe('TableHeader atom', () => {

    it('should render text passed to content', () => {
        render(<TableHeader content="Heading" />)
        const tableHeader = screen.getByText('Heading')
        expect(tableHeader).toBeInTheDocument()
    })

    it('should have a classes preset', () => {
        render(<TableHeader content="Heading" />)
        const tableHeader = screen.getByText('Heading')
        expect(tableHeader).toHaveClass('font-medium pb-4 pt-1 text-base text-left text-txtpurple')
    })

})