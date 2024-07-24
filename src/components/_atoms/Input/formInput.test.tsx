import { fireEvent } from "@storybook/test";
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import FormInput from "./FormInput";

const onChange = vi.fn();

const renderComponent = () =>
  render(
    <FormInput id="teste" label="Teste" error="Error" onChange={onChange} />
  );

describe("FormInput", () => {
  it("should render correctly", () => {
    renderComponent();

    const label = screen.getByLabelText("Teste");
    const inputField = screen.getByRole("textbox");
    const error = screen.getByText("Error");

    expect(error).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(inputField).toBeInTheDocument();
  });

  it("should trigger the event onChange", () => {
    renderComponent();

    const inputField = screen.getByRole("textbox");
    fireEvent.change(inputField, { target: { value: "Teste" } });

    expect(onChange).toHaveBeenCalled();
  });
});
