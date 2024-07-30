import { CreateAccountFields, FormLoginField } from "./validations";

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

export async function loginUser(userData: FormLoginField) {
  try {
    const response = await fetch("http://localhost:3000/accountData");

    if (response.ok) {
      const users = (await response.json()) as (CreateAccountFields & {id: string})[];
      const userExists = users.find(
        (user) =>
          userData.email === user.email && userData.password === user.password
      );
      
      if (userExists) {
        console.log(userExists);
        return { data: userExists.id, error: "" };
      } else {
        return {
          data: "",
          errors:
            "User not found, please use an existent user or create a account!",
        };
      }
    }
  } catch (error) {
    if (error instanceof Error) {
      return { errors: error.message };
    }
  }
}

// loginUser({email: 'asdsa@dasdsa.com', password: 'asdasdasd'})
// loginUser({email: 'sidney.e.s.s.jr@gmail.com', password: '1234Abc@'})