import { render, screen } from '@testing-library/react';
import { HeadBlock } from './HeadBlock';

const mockData = {label: 'Value', icon: 'invalid_url', amount: 313}

describe("HeadBlock atom", () => {

    it('should render the mock data', () => {
        render(<HeadBlock data={mockData} />)

        const label = screen.getByText(mockData.label)
        const amount = screen.getByText(`$${mockData.amount}`)

        expect(label).toBeInTheDocument()
        expect(amount).toBeInTheDocument()
    })

    it('should apply value to img attibutes', () => {
        render(<HeadBlock data={mockData} />)

        const img = screen.getByRole('img')

        expect(img).toHaveAttribute('src', mockData.icon)
        expect(img).toHaveAttribute('alt', `${mockData.label} icon`)
    })

    it('should display the img alt text if the url is not valid', () => {
        render(<HeadBlock data={mockData} />)
        expect(screen.getByAltText(`${mockData.label} icon`)).toBeVisible()
    })
})