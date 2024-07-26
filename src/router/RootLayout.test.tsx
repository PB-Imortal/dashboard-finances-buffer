import { render } from "@testing-library/react";
import { describe, expect, vi } from "vitest";
import RootLayout from "./RootLayout";
import { BrowserRouter } from "react-router-dom";

const viUseScreenSizeMock = vi.fn().mockReturnValue({ width: 1023 });

vi.mock("../hook/useHooks", async (importOriginal) => {
  const actual: [] = await importOriginal();
  return {
    ...actual,
    useScreenSize() {
      return viUseScreenSizeMock;
    },
  };
});

describe("RootLayout Component", () => {
  test("should render SideBar when screen width is less than or equal to 1023", () => {
    const { getByText } = render(
      <BrowserRouter>
        <RootLayout />
      </BrowserRouter>
    );
    const homeLink = getByText("Home");
    expect(homeLink).toBeInTheDocument();
  });

  test("should render DeskTopSideBar when screen width is greater than 1023", () => {
    viUseScreenSizeMock.mockReturnValue({ width: 1024 });
    const { getByText } = render(
      <BrowserRouter>
        <RootLayout />
      </BrowserRouter>
    );
    const homeLink = getByText("Home");
    expect(homeLink).toBeInTheDocument();
  });
});