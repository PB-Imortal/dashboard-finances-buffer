import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import DeskTopSideBar from "./DeskTopSideBar";

describe("DeskTopSideBar", () => {
  test("should render sidebar with logo and nav items", () => {
    render(
      <MemoryRouter>
        <DeskTopSideBar styles="test-styles" />
      </MemoryRouter>
    );

    expect(screen.getByAltText("Logo")).toBeInTheDocument();

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Statement")).toBeInTheDocument();
    expect(screen.getByText("Profile")).toBeInTheDocument();
    expect(screen.getByText("Notifications")).toBeInTheDocument();
    expect(screen.getByText("Settings")).toBeInTheDocument();
    expect(screen.getByText("Logout")).toBeInTheDocument();
  });

  test("should handle hover state on nav items", () => {
    render(
      <MemoryRouter>
        <DeskTopSideBar styles="test-styles" />
      </MemoryRouter>
    );

    const homeItem = screen.getByText("Home");
    const profileItem = screen.getByText("Profile");

    fireEvent.mouseEnter(homeItem);
    expect(homeItem).toHaveStyle("transform: scale(1.05)");

    fireEvent.mouseEnter(profileItem);
    expect(profileItem).toHaveStyle("transform: scale(1.05)");
  });
});
