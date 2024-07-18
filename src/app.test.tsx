import { render, screen } from "@testing-library/react";
import App from "./App";

describe("", () => {
  it("Should test", () => {
    render(<App />);
    screen.getByRole("heading");
  });
});
