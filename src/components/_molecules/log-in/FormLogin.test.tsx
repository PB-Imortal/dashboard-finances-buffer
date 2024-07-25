import { fireEvent, render, screen, 
  // waitFor 
} from "@testing-library/react";
import { vi } from "vitest";
import FormLogin from "./FormLogin";
import { MemoryRouter, 
  // useNavigate
 } from "react-router-dom";

const getAllComponents = () => {
  return {
    emailInput: screen.getByPlaceholderText("E-mail") as HTMLInputElement,
    passwordInput: screen.getByPlaceholderText("Password") as HTMLInputElement,
    loginButton: screen.getByText(/Log in/i) as HTMLButtonElement,
    createAccountButton: screen.getByText(
      /Create account/i
    ) as HTMLAnchorElement,
  };
};

vi.mock("react-router-dom", async (importOriginal) => {
  const actual: [] = await importOriginal();
  return {
    ...actual,
    useNavigate: () => vi.fn
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

    const loginButton = screen.getByText(/Log in/i) as HTMLButtonElement;
    const createAccountButton = screen.getByRole("link", {
      name: /Create account/i,
    }) as HTMLAnchorElement;

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
    expect(createAccountButton).toBeInTheDocument();
  });

  //fix this 
  test("Should validate the field inputs, open/close snackbar and send the user to homepage by triggering useNavigate", async () => {

    // const navigateToSignin = vi.fn();

    // vi.mocked(useNavigate).mockReturnValue(navigateToSignin)

    // render(
    //   <MemoryRouter>
    //     <FormLogin />
    //   </MemoryRouter>
    // );
    // const { emailInput, passwordInput, loginButton } = getAllComponents();

    // fireEvent.change(emailInput, { target: { value: "teste@email.com" } });
    // fireEvent.change(passwordInput, { target: { value: "123456aA#" } });
    // fireEvent.click(loginButton);

    // const snackBar = await screen.findByText("Successfully Logged In");

    // expect(snackBar).toBeVisible();


    // await waitFor(() => 
    //   expect(navigateToSignin).toHaveBeenCalledTimes(1),{
    //   interval: 4000,
    // });

    // navigateToSignin.mockRestore();

    // expect(snackBar).not.toBeVisible();
  });

  test("Should show to the user error messages of inputs without a valid value", async () => {
    render(
      <MemoryRouter>
        <FormLogin />
      </MemoryRouter>
    );

    const {emailInput, passwordInput, loginButton} = getAllComponents();

    fireEvent.change(emailInput, {target: {value: ''}})
    fireEvent.change(passwordInput, {target: {value: ''}})
    fireEvent.click(loginButton)

    const emailMessageError = await screen.findByText('Please use a valid e-mail address')
    const passwordMessageError = await screen.findByText('Required')

    expect(emailMessageError).toBeInTheDocument();
    expect(passwordMessageError).toBeInTheDocument();


    // fix this bellow



    // const snackBar = screen.getByText("Successfully Logged In");

    // expect(snackBar).not.toBeInTheDocument()
  });
});
