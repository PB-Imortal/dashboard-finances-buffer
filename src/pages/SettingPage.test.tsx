import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, vi } from "vitest";
import SettingPage from "./SettingPage";
import { useTheme } from "../providers/context/ThemeContext";

vi.mock("../providers/context/ThemeContext"); 
describe("SettingPage", () => {
  let isDarkMode = false;
  const toggleDarkMode = vi.fn(() => {
    isDarkMode = !isDarkMode;
  });

  beforeEach(() => {
    vi.clearAllMocks();
    isDarkMode = false;
    useTheme.mockReturnValue({ isDarkMode, toggleDarkMode });
  });

  test("should initialize with light mode", () => {
    render(<SettingPage />);

    expect(document.documentElement.classList.contains("dark")).toBe(false);
    expect(screen.getByAltText("Light Mode")).toBeInTheDocument();
    expect(screen.getByText("Light Mode")).toBeInTheDocument();
  });

  test("should render the settings page with the correct title", () => {
    render(<SettingPage />);
    expect(screen.getByText("Settings")).toBeInTheDocument();
  });

  test("should toggle dark mode when the checkbox is clicked", () => {
    render(<SettingPage />);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();

    expect(document.documentElement.classList.contains("dark")).toBe(false);

    fireEvent.click(checkbox);
    expect(toggleDarkMode).toHaveBeenCalled();
    expect(isDarkMode).toBe(true);

    fireEvent.click(checkbox);
    expect(toggleDarkMode).toHaveBeenCalledTimes(2);
    expect(isDarkMode).toBe(false);
  });

  // test("should display the correct icon and label based on the mode", () => {
  //   render(<SettingPage />);

  //   const checkbox = screen.getByRole("checkbox");
  //   expect(checkbox).toBeInTheDocument();

  //   expect(screen.getByAltText("Light Mode")).toBeInTheDocument();
  //   expect(screen.getByText("Light Mode")).toBeInTheDocument();

  //   fireEvent.click(checkbox);
  //   expect(screen.getByAltText("Dark Mode")).toBeInTheDocument();
  //   expect(screen.getByText("Dark Mode")).toBeInTheDocument();
  // });

  // test("should initialize with dark mode if the state is set to true", () => {
  //   isDarkMode = true;
  //   useTheme.mockReturnValue({ isDarkMode, toggleDarkMode });
  //   render(<SettingPage />);

  //   expect(document.documentElement.classList.contains("dark")).toBe(true);
  //   expect(screen.getByAltText("Dark Mode")).toBeInTheDocument();
  //   expect(screen.getByText("Dark Mode")).toBeInTheDocument();
  // });
});