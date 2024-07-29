import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import DeskTopSideBar from "./DeskTopSideBar";

describe("DeskTopSideBar", () => {
  test("renders the Home link", () => {
    render(
      <MemoryRouter>
        <DeskTopSideBar styles="" />
      </MemoryRouter>
    );
    const homeLink = screen.getByText("Home");
    expect(homeLink).toBeInTheDocument();
  });

  test("renders the Statement link", () => {
    render(
      <MemoryRouter>
        <DeskTopSideBar styles="" />
      </MemoryRouter>
    );
    const statementLink = screen.getByText("Statement");
    expect(statementLink).toBeInTheDocument();
  });

  test("renders the Profile link", () => {
    render(
      <MemoryRouter>
        <DeskTopSideBar styles="" />
      </MemoryRouter>
    );
    const profileLink = screen.getByText("Profile");
    expect(profileLink).toBeInTheDocument();
  });

  test("renders the Setting link", () => {
    render(
      <MemoryRouter>
        <DeskTopSideBar styles="" />
      </MemoryRouter>
    );
    const settingLink = screen.getByText("Setting");
    expect(settingLink).toBeInTheDocument();
  });

  test("renders the Logout link", () => {
    render(
      <MemoryRouter>
        <DeskTopSideBar styles="" />
      </MemoryRouter>
    );
    const logoutLink = screen.getByText("Logout");
    expect(logoutLink).toBeInTheDocument();
  });
});