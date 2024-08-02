import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { vi } from "vitest";
import { router } from "./Router";
import * as auth from "../providers/context/AuthContext";

const useSpy = vi.spyOn(auth, "useAuth").mockReturnValue({ isLoggedIn: true });

describe("Router", () => {
  vi.mock("react", async (importOriginal) => {
    const actual: [] = await importOriginal();
    return {
      ...actual,
      useRef() {
        return {
          current: {
            offsetWidth: 100,
            offsetLeft: 0,
            scrollIntoView: vi.fn(),
          },
        };
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

  it("should navigate to path /", () => {
    const fakeRoute = createMemoryRouter(router.routes, {
      initialEntries: ["/"],
      initialIndex: 0,
    });

    render(<RouterProvider router={fakeRoute} />);

    const element = screen.getByRole("heading", {
      name: "Welcome to My statement",
      level: 1,
    });

    expect(element).toBeInTheDocument();
  });

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

  it("should navigate to path /profile", () => {
    const fakeRoute = createMemoryRouter(router.routes, {
      initialEntries: ["/profile"],
      initialIndex: 0,
    });

    render(<RouterProvider router={fakeRoute} />);
    expect(screen.getByText(/Edit Profile/));
  });

  it("should navigate to path / unauthenticated", () => {
    const fakeRoute = createMemoryRouter(router.routes, {
      initialEntries: ["/"],
      initialIndex: 0,
    });

    useSpy.mockReturnValue({ isLoggedIn: false });

    render(<RouterProvider router={fakeRoute} />);

    const element = screen.queryByRole("heading", {
      name: "Welcome to My statement",
      level: 1,
    });

    expect(element).not.toBeInTheDocument();
  });

  it("should navigate to path /profile unauthenticated", () => {
    const fakeRoute = createMemoryRouter(router.routes, {
      initialEntries: ["/profile"],
      initialIndex: 0,
    });

    render(<RouterProvider router={fakeRoute} />);
    expect(screen.queryByText(/Edit Profile/)).not.toBeInTheDocument();
  });
});
