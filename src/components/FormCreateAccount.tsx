import ButtonComponent from "./Button";
import FormInput from "./FormInput";

export default function FormCreateAccount() {
  return (
    <form action="">
      <FormInput id="lastName" label="Last Name" placeholder="Last name" />
      <FormInput id="firstName" label="First Name" placeholder="First name" />
      <FormInput id="email" label="E-mail" placeholder="E-mail" type="email" />
      <FormInput
        id="password"
        label="Password"
        placeholder="Password"
        type="password"
      />
      <FormInput
        id="confirm-password"
        label="Confirm password"
        placeholder="Password"
        type="password"
      />
      <ButtonComponent arialabeltext="Create account" styles="">
        Create account
      </ButtonComponent>
    </form>
  );
}
