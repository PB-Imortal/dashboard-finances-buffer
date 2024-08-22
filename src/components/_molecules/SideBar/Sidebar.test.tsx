import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import SideBar from "./SideBar";

describe("SideBar Component", () => {
  it("renders the SideBar component", () => {
    render(
      <BrowserRouter>
        <SideBar styles="test-styles" />
      </BrowserRouter>
    );
    expect(screen.getByTestId("burger-menu")).toBeInTheDocument();
  });

  it("toggles the sidebar when burger menu is clicked", () => {
    render(
      <BrowserRouter>
        <SideBar styles="test-styles" />
      </BrowserRouter>
    );
    const burgerMenu = screen.getByTestId("burger-menu");
    fireEvent.click(burgerMenu);
    expect(screen.getByTestId("sidebar")).toHaveClass("translate-x-0");
    fireEvent.click(burgerMenu);
    expect(screen.getByTestId("sidebar")).toHaveClass("-translate-x-full");
  });

  it("closes the sidebar when overlay is clicked", () => {
    render(
      <BrowserRouter>
        <SideBar styles="test-styles" />
      </BrowserRouter>
    );
    const burgerMenu = screen.getByTestId("burger-menu");
    fireEvent.click(burgerMenu);
    const overlay = screen.getByTestId("overlay");
    fireEvent.click(overlay);
    expect(screen.getByTestId("sidebar")).toHaveClass("-translate-x-full");
  });

  it("closes the sidebar when escape key is pressed", () => {
    render(
      <BrowserRouter>
        <SideBar styles="test-styles" />
      </BrowserRouter>
    );
    const burgerMenu = screen.getByTestId("burger-menu");
    fireEvent.click(burgerMenu);
    const overlay = screen.getByTestId("overlay");
    if (overlay) {
      overlay.focus(); 
      fireEvent.keyDown(overlay, { key: "Escape", code: "Escape" });
      expect(screen.getByTestId("sidebar")).toHaveClass("-translate-x-full");
    } else {
      throw new Error("Overlay element not found");
    }
  });

  it("renders NavLink components with correct active state", () => {
    render(
      <BrowserRouter>
        <SideBar styles="test-styles" />
      </BrowserRouter>
    );
    const homeLink = screen.getByText("Home");
    expect(homeLink).toBeInTheDocument();
    fireEvent.click(homeLink);
    expect(homeLink.parentElement).toHaveClass("text-[#8E48EC]");
  });
});
