import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";
import FormLogin from "./FormLogin";
 
const navigateMock = vi.fn();
 
const getAllComponents = () => {
  return {
    emailInput: screen.getByPlaceholderText("E-mail"),
    passwordInput: screen.getByPlaceholderText("Password"),
    loginButton: screen.getByText(/Log in/i),
    createAccountButton: screen.getByText(
      /Create account/i
    ),
  };
};
 
vi.mock("react-router-dom", async (importOriginal) => {
  const actual: [] = await importOriginal();
  return {
    ...actual,
    useNavigate() {
      return navigateMock;
    },
    Link: vi.fn().mockImplementation(({ children }) => children),
  };
});
 
describe("FormLogin", () => {
  test("Should render correctly on the screen", () => {
    render(
      <MemoryRouter>
        <FormLogin />
      </MemoryRouter>
    );
 
    const emailInput: HTMLInputElement = screen.getByPlaceholderText("E-mail");
    const passwordInput: HTMLInputElement =
      screen.getByPlaceholderText("Password");
 
    const loginButton = screen.getByText(/Log in/i);
    const createAccountButton = screen.getByText(
      /Create account/i
    ) as HTMLAnchorElement;
 
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
    expect(createAccountButton).toBeInTheDocument();
  });
 
  //fix this
  test("Should validate the field inputs, open/close snackbar and send the user to homepage by triggering useNavigate", async () => {
    render(<FormLogin />);
    const { emailInput, passwordInput, loginButton } = getAllComponents();
 
    act(() => {
      fireEvent.change(emailInput, { target: { value: "teste@email.com" } });
      fireEvent.change(passwordInput, { target: { value: "123456aA#" } });
      fireEvent.click(loginButton);
    });
    const snackBar = await screen.findByText("Successfully Logged In");
 
    expect(snackBar).toBeVisible();
 
    await waitFor(() => expect(navigateMock).toHaveBeenCalledTimes(1), {
      timeout: 4100,
    });
 
    navigateMock.mockRestore();
 
    expect(snackBar).not.toBeVisible();
  });
 
  test("Should show to the user error messages of inputs without a valid value", async () => {
    render(
      <MemoryRouter>
        <FormLogin />
      </MemoryRouter>
    );
 
    const { emailInput, passwordInput, loginButton } = getAllComponents();
 
    fireEvent.change(emailInput, { target: { value: "" } });
    fireEvent.change(passwordInput, { target: { value: "" } });
    fireEvent.click(loginButton);
 
    const emailMessageError = await screen.findByText(
      "Please use a valid e-mail address"
    );
    const passwordMessageError = await screen.findByText("Required");
 
    expect(emailMessageError).toBeInTheDocument();
    expect(passwordMessageError).toBeInTheDocument();
 
    const snackBar = screen.queryByText("Successfully Logged In");
 
    await waitFor(() => expect(snackBar).not.toBeInTheDocument(), {timeout: 5000})

    await waitFor(() => expect(navigateMock).not.toHaveBeenCalled(), {timeout: 5000})
    
  });
});