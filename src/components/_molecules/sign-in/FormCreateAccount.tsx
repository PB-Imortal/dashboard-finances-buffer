import ButtonComponent from "../../_atoms/Button";
import FormInput from "../../_atoms/FormInput";

export default function FormCreateAccount() {
  return (
    <form className="grid grid-cols-2 gap-x-8 gap-y-4">
      <FormInput id="lastName" label="Last Name" placeholder="Last name" />
      <FormInput id="firstName" label="First Name" placeholder="First name" />
      <FormInput
        id="email"
        label="E-mail"
        placeholder="E-mail"
        styles="col-span-2"
        type="email"
      />
      <FormInput
        id="password"
        label="Password"
        placeholder="Password"
        type="password"
        styles="col-span-2"
      />
      <FormInput
        styles="col-span-2"
        id="confirm-password"
        label="Confirm password"
        placeholder="Password"
        type="password"
      />
      <ButtonComponent
        bgcolor="bgblack"
        styles=" p-3 text-txwhite rounded-md font-semibold col-span-2"
        arialabeltext="Create account"
      >
        Create account
      </ButtonComponent>
    </form>
  );
}
