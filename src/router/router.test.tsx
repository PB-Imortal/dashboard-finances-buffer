import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { vi } from "vitest";
import { router } from "./Router";

describe("Router", () => {
  vi.mock("react", async (importOriginal) => {
    const actual: [] = await importOriginal();
    return {
      ...actual,
      scrollIntoView() {
        return vi.fn();
      },
      forwardRef() {
        return vi.fn().mockImplementation((props) => props.children);
      },
    };
  });

  vi.mock("react-router-dom", async (importOriginal) => {
    const actual: [] = await importOriginal();
    return {
      ...actual,
      Link: vi.fn().mockImplementation((props) => props.children),
    };
  });

  //   it("should navigate to path /", () => {
  //     const fakeRoute = createMemoryRouter(router.routes, {
  //       initialEntries: ["/"],
  //       initialIndex: 0,
  //     });

  //     render(<RouterProvider router={fakeRoute} />);
  //     expect(
  //       screen.getByRole("heading", { name: "Welcome to My statement", level: 1 })
  //     );
  //   });

  it("should navigate to path /login", () => {
    const fakeRoute = createMemoryRouter(router.routes, {
      initialEntries: ["/login"],
      initialIndex: 0,
    });

    render(<RouterProvider router={fakeRoute} />);
    expect(screen.getByRole("heading", { name: "Log in", level: 1 }));
  });

  it("should navigate to path /signin", () => {
    const fakeRoute = createMemoryRouter(router.routes, {
      initialEntries: ["/signin"],
      initialIndex: 0,
    });

    render(<RouterProvider router={fakeRoute} />);
    expect(screen.getByRole("heading", { name: "Create account", level: 1 }));
  });

  it("should navigate to path /profile", async () => {
    const fakeRoute = createMemoryRouter(router.routes, {
      initialEntries: ["/profile"],
      initialIndex: 0,
    });

    render(<RouterProvider router={fakeRoute} />);
    const text = await screen.findByText(/Edit Profile/);
    expect(text).toBeInTheDocument();
  });
});
