import { render, screen} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import SideBar from './SideBar';

describe("SideBar", () => {
    test("renders SideBar component", () =>{
        render(
            <BrowserRouter>
                <SideBar styles="test-styles" />
            </BrowserRouter>
        );

        expect(screen.getByAltText("logo")).toBeInTheDocument();

        expect(screen.getByText("Home")).toBeInTheDocument();
        expect(screen.getByText("Statement")).toBeInTheDocument();
        expect(screen.getByText("Profile")).toBeInTheDocument();
        expect(screen.getByText("Notification")).toBeInTheDocument();
        expect(screen.getByText("Setting")).toBeInTheDocument();
        expect(screen.getByText("Logout")).toBeInTheDocument();
    });

    test("opens and closes the sidebar", () => {
        render(
            <BrowserRouter>
                <SideBar styles="test-styles" />
            </BrowserRouter>
        );

        expect(screen.queryByText("Home")).toBeVisible();
    });
});