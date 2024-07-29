import { CreateAccountFields } from "./validations";

export async function postCreateAccount(accountData: CreateAccountFields) {
  try {
    const response = await fetch("http://localhost:3000/accountData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(accountData),
    });

    if (response.ok) {
      const user = await fetch("http://localhost:3000/accountData");
      const users = (await user.json()) as CreateAccountFields &
        { id: string }[];

      return { data: users[users.length - 1].id as string, errors: "" };
    } else {
      return { data: "", errors: response.statusText };
    }
  } catch (error) {
    if (error instanceof Error) {
      return { data: "", errors: error.message };
    }
  }
}
