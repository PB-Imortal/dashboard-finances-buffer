import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import CarouselNav from "./CarouselNav";

const items = [
  { label: "Back", to: "/" },
  { label: "Edit Profile", to: "" },
  { label: "Preferences", to: "preferences" },
  { label: "Security", to: "security" },
];

describe("CarouselNav Component", () => {
  test("renders correctly", () => {
    render(
      <Router>
        <CarouselNav items={items} />
      </Router>
    );

    items.forEach((item) => {
      expect(
        screen.getByText((_content, element) => {
          return element?.textContent === item.label;
        })
      ).toBeInTheDocument();
    });
  });

  test("initial state is correct", () => {
    render(
      <Router>
        <CarouselNav items={items} />
      </Router>
    );

    const firstItem = screen.getByText("Back");
    expect(firstItem.classList.contains("text-bgblack")).toBe(true);
    expect(firstItem.classList.contains("font-bold")).toBe(true);
  });

  test("clicking on items updates the state", () => {
    render(
      <Router>
        <CarouselNav items={items} />
      </Router>
    );

    const secondItem = screen.getByText("Edit Profile");
    fireEvent.click(secondItem);

    expect(secondItem.classList.contains("text-bgblack")).toBe(true);
    expect(secondItem.classList.contains("font-bold")).toBe(true);
    expect(screen.getByText("Back").classList.contains("text-bggrey")).toBe(
      true
    );
  });

  test("correct item is highlighted after interaction", () => {
    render(
      <Router>
        <CarouselNav items={items} />
      </Router>
    );

    const thirdItem = screen.getByText("Preferences");
    fireEvent.click(thirdItem);

    expect(thirdItem.classList.contains("text-bgblack")).toBe(true);
    expect(thirdItem.classList.contains("font-bold")).toBe(true);
    expect(screen.getByText("Back").classList.contains("text-bggrey")).toBe(
      true
    );
    expect(
      screen.getByText("Edit Profile").classList.contains("text-bggrey")
    ).toBe(true);
  });
});
