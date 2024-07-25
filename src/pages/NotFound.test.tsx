import { render, screen } from "@testing-library/react";
import NotFound from "../pages/NotFound";
import { BrowserRouter } from "react-router-dom";

describe("NotFound", () => {
  test("renders the NotFound component", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );

    const notFoundElement = screen.getByAltText(
      "woman with a magnifying glass"
    );
    expect(notFoundElement).toBeInTheDocument();
  });
});
