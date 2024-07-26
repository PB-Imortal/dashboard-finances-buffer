import { render, fireEvent } from "@testing-library/react";
import { describe, expect, vi } from "vitest";
import BurgerMenu from "../SideBar/BurgerMenu";

describe("BurgerMenu Component", () => {
  test("should render the burger menu button", () => {
    const setIsOpen = vi.fn();
    const isOpen = false;
    const { getByTestId } = render(
      <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    );
    const button = getByTestId("burger-menu");
    expect(button).toBeInTheDocument();
  });

  test("should call setIsOpen when the button is clicked", () => {
    const setIsOpen = vi.fn();
    const isOpen = false;

    const { getByTestId } = render(
      <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    );
    const button = getByTestId("burger-menu");

    fireEvent.click(button);
    expect(setIsOpen).toHaveBeenCalledWith(!isOpen);
  });
});
