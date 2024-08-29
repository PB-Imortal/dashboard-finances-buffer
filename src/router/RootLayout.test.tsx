import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, vi } from "vitest";
import RootLayout from "./RootLayout";

const viUseScreenSizeMock = vi.fn();

vi.mock("../hook/useHooks", async () => {
  const actual = await import("../hook/useHooks");
  return {
    ...actual,
    useScreenSize: () => viUseScreenSizeMock(),
  };
});

describe("RootLayout Component", () => {
  test("should render SideBar when screen width is less than or equal to 1023", () => {
    viUseScreenSizeMock.mockReturnValue({ width: 768 });

    const { getByText, getByTestId } = render(
      <BrowserRouter>
        <RootLayout />
      </BrowserRouter>
    );
    const homeLink = getByText("Home");
    expect(homeLink).toBeInTheDocument();
    const sidebar = getByTestId("sidebar");
    expect(sidebar).toBeInTheDocument();
  });

  test("should render DeskTopSideBar when screen width is greater than 1023", () => {
    viUseScreenSizeMock.mockReturnValue({ width: 1024 });
    const { getByText, getByTestId } = render(
      <BrowserRouter>
        <RootLayout />
      </BrowserRouter>
    );
    const homeLink = getByText("Home");
    expect(homeLink).toBeInTheDocument();
    const sidebar = getByTestId("desktopsidebar");
    expect(sidebar).toBeInTheDocument();
  });
});
