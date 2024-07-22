import ButtonComponent from "./Button";
import FormInput from "./FormInput";

export default function FormCreateAccount() {
  return (
    <form action="">
      <FormInput
        inputstyles=""
        labelstyles=""
        arialabeltext=""
        id="lastName"
        label="Last Name"
        placeholdertext="Last name"
      />
      <FormInput
        inputstyles=""
        labelstyles=""
        arialabeltext=""
        id="firstName"
        label="First Name"
        placeholdertext="First name"
      />
      <FormInput
        inputstyles=""
        labelstyles=""
        arialabeltext=""
        id="email"
        label="E-mail"
        placeholdertext="E-mail"
      />
      <FormInput
        inputstyles=""
        labelstyles=""
        arialabeltext=""
        id="password"
        label="Password"
        placeholdertext="Password"
      />
      <FormInput
        inputstyles=""
        labelstyles=""
        arialabeltext=""
        id="confirm-password"
        label="Confirm password"
        placeholdertext="Password"
      />
      <ButtonComponent arialabeltext="Create account" styles="">
        Create account
      </ButtonComponent>
    </form>
  );
}
