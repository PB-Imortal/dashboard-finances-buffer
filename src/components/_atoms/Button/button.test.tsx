import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import ButtonComponent from "./Button";

describe("ButtonComponent", () => {
  it("should render correctly", () => {
    render(
      <ButtonComponent
        arialabeltext=""
        bgcolor="bg-bgblack"
        textColor="text-txwhite"
        styles="p-3"
      >
        Button
      </ButtonComponent>
    );
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Button");
    expect(button).toHaveClass("bg-bgblack");
    expect(button).toHaveClass("text-txwhite");
    expect(button).toHaveClass("p-3");
  });

  it("should trigger the event onClick", () => {
    const handleClick = vi.fn();
    render(
      <ButtonComponent
        arialabeltext=""
        bgcolor="bg-bgblack"
        textColor="text-txwhite"
        styles="p-3"
        onClick={handleClick}
      >
        Button
      </ButtonComponent>
    );

    const button = screen.getByRole("button");

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
