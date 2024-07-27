import { render, screen } from '@testing-library/react';
import { HeadBlock } from './HeadBlock';

const testData = {label: 'Value', icon: 'invalid_url', amount: 313}

describe("HeadBlock atom", () => {

    it('should render the specified data', () => {
        render(<HeadBlock data={testData} />)

        const label = screen.getByText(testData.label)
        const amount = screen.getByText(`$${testData.amount}`)

        expect(label).toBeInTheDocument()
        expect(amount).toBeInTheDocument()
    })

    it('should apply value to img attibutes', () => {
        render(<HeadBlock data={testData} />)

        const img = screen.getByRole('img')

        expect(img).toHaveAttribute('src', testData.icon)
        expect(img).toHaveAttribute('alt', `${testData.label} icon`)
    })

    it('should display the img alt text if the url is not valid', () => {
        render(<HeadBlock data={testData} />)
        expect(screen.getByAltText(`${testData.label} icon`)).toBeVisible()
    })
})