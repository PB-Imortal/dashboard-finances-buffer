import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { vi } from "vitest";
import * as api from "../../../common/functions/api";
import FormCreateAccount from "./FormCreateAccount";

const navigateMock = vi.fn();

vi.spyOn(api, "postCreateAccount").mockResolvedValue({
  data: "1",
  errors: "",
});

const fieldValues = () => {
  return {
    lastName: screen.getByPlaceholderText("Last name"),
    firstName: screen.getByPlaceholderText("First name"),
    email: screen.getByPlaceholderText("E-mail"),
    password: screen.getAllByPlaceholderText("Password")[0],
    confPassword: screen.getAllByPlaceholderText("Password")[1],
    button: screen.getByRole("button"),
  };
};

describe("FormCreateAccount", () => {
  vi.mock("react-router-dom", async (importOriginal) => {
    const actual: [] = await importOriginal();
    return {
      ...actual,
      useNavigate() {
        return navigateMock;
      },
    };
  });

  beforeEach(() => {
    render(<FormCreateAccount />);
  });

  it("should render correctly", () => {
    const emailPlaceholder: HTMLInputElement =
      screen.getByPlaceholderText("E-mail");

    const passwordPlaceholder: HTMLInputElement[] =
      screen.getAllByPlaceholderText("Password");

    const confirmPasswordPlaceholder: HTMLInputElement[] =
      screen.getAllByPlaceholderText("Password", {});

    expect(emailPlaceholder.type).toBe("email");
    expect(passwordPlaceholder[0].type).toBe("password");
    expect(confirmPasswordPlaceholder[1].type).toBe("password");
  });

  it("should open and close the snackbar and trigger useNavigate", async () => {
    const fields = fieldValues();
    const button = screen.getByRole("button");

    act(() => {
      fireEvent.change(fields.lastName, { target: { value: "Teste" } });
      fireEvent.change(fields.firstName, { target: { value: "Teste" } });
      fireEvent.change(fields.email, {
        target: { value: "teste@teste.com" },
      });
      fireEvent.change(fields.password, { target: { value: "1234Abc@" } });
      fireEvent.change(fields.confPassword, {
        target: { value: "1234Abc@" },
      });

      fireEvent.click(button);
    });

    const snackbar = await screen.findByText("Registration completed");

    expect(snackbar).toBeVisible();

    await waitFor(() => expect(navigateMock).toHaveBeenCalledWith("/"), {
      timeout: 3100,
    });

    navigateMock.mockClear();

    expect(snackbar).not.toBeVisible();
  });

  it("should open and close the snackbar and trigger useNavigate", async () => {
    const fields = fieldValues();
    const button = screen.getByRole("button");

    act(() => {
      fireEvent.change(fields.lastName, { target: { value: "" } });
      fireEvent.change(fields.firstName, { target: { value: "" } });
      fireEvent.change(fields.email, { target: { value: "" } });
      fireEvent.change(fields.password, { target: { value: "1234A" } });
      fireEvent.change(fields.confPassword, { target: { value: "12" } });

      fireEvent.click(button);
    });

    const required = await screen.findAllByText("Required*");
    const lastNameError = required[0];
    const firstNameError = required[0];
    const emailError = required[0];
    const passwordError = await screen.findByText("Requirements not met");
    const confPasswordError = await screen.findByText("Divergent passwords");

    expect(lastNameError).toBeInTheDocument();
    expect(firstNameError).toBeInTheDocument();
    expect(emailError).toBeInTheDocument();
    expect(passwordError).toBeInTheDocument();
    expect(confPasswordError).toBeInTheDocument();

    expect(screen.getByText("Divergent passwords")).toBeInTheDocument();

    expect(
      screen.queryByText("Registration completed")
    ).not.toBeInTheDocument();

    await waitFor(() => expect(navigateMock).not.toHaveBeenCalled(), {
      timeout: 3100,
    });
  });
});
