import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";

describe("NavBar", () => {
  test("renders the search input", () => {
    render(<NavBar />, { wrapper: BrowserRouter });
    const searchInput = screen.getByLabelText("Search box");
    expect(searchInput).toBeInTheDocument();
  });

  test("renders the settings button", () => {
    render(<NavBar />, { wrapper: BrowserRouter });
    const settingsButton = screen.getByLabelText("Settings button");
    expect(settingsButton).toBeInTheDocument();
  });

  test("renders the notifications button", () => {
    render(<NavBar />, { wrapper: BrowserRouter });
    const notificationsButton = screen.getByLabelText("Notifications button");
    expect(notificationsButton).toBeInTheDocument();
  });

  test("renders the user avatar", () => {
    render(<NavBar />, { wrapper: BrowserRouter });
    const userAvatar = screen.getByAltText("user avatar");
    expect(userAvatar).toBeInTheDocument();
  });
});
