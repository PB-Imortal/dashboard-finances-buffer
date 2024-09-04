import { render, screen } from "@testing-library/react";
import { BrowserRouter, createMemoryRouter, RouterProvider } from "react-router-dom";
import { vi } from "vitest";
import { router } from "./Router";
import * as auth from "../providers/context/AuthContext";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignInPage from "../pages/SigninPage";
import Profile from "../pages/Profile";

const useSpy = vi.spyOn(auth, "useAuthContext").mockReturnValue({
  isLoggedIn: true,
} as auth.AuthContextType);

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
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );

    const element = screen.getByRole("heading", {
      name: "Welcome to My statement",
      level: 1,
    });

    expect(element).toBeInTheDocument();
  });

  it("should navigate to path /login", () => {
    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );
    expect(screen.getByRole("heading", { name: "Log in", level: 1 }));
  });

  it("should navigate to path /signin", () => {
    render(
      <BrowserRouter>
        <SignInPage />
      </BrowserRouter>
    );
    expect(screen.getByRole("heading", { name: "Create account", level: 1 }));
  });

  it("should navigate to path /profile", () => {
    render(
      <BrowserRouter>
        <Profile />
      </BrowserRouter>
    );
    expect(screen.getByText(/Edit Profile/));
  });

  it("should navigate to path / unauthenticated", () => {
    const fakeRoute = createMemoryRouter(router.routes, {
      initialEntries: ["/"],
      initialIndex: 0,
    });

    useSpy.mockReturnValue({
      isLoggedIn: false,
    } as auth.AuthContextType);

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
