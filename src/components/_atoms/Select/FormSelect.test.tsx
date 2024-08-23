import {render, screen} from "@testing-library/react";
import { FormSelect } from "./FormSelect";

describe("FormStatement", () => {
    const mockData = {
        label: "Test",
        options: ["1", "2"],
        testId: "01"
    };

    it("should render props", () => {
        render(
            <FormSelect 
                label={mockData.label} 
                options={mockData.options} 
                data-testid={mockData.testId}
                forwId="S001"
            />
        );
        const label = screen.getByText(mockData.label);
        expect(label).toBeInTheDocument();

        mockData.options.map(option => 
            expect(screen.getByText(option)).toBeInTheDocument());
    });

    it("should render options as select children", () => {
        render(
            <FormSelect 
                label={mockData.label} 
                options={mockData.options} 
                data-testid={mockData.testId}
                forwId="S001"
            />
        );
        const select = screen.getByTestId(mockData.testId);
        expect(select.childElementCount).toBe(mockData.options.length);
    })
})