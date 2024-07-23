import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import ButtonComponent from "../../_atoms/Button";
import FormInput from "../../_atoms/FormInput";
import {
  CreateAccountFields,
  formCreateAccount,
} from "../../common/functions/validations";
import InfiniteSpinner from "../../common/svg/InfiniteSpinner";
import LockIcon from "../../common/svg/LockIcon";

export default function FormCreateAccount() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<CreateAccountFields>({
    resolver: zodResolver(formCreateAccount),
  });

  function onSubmit(data: CreateAccountFields) {
    console.log(data);

    reset();
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-2 gap-x-8 gap-y-4"
    >
      <FormInput
        {...register("lastName")}
        id="lastName"
        label="Last Name"
        placeholder="Last name"
      />
      <FormInput
        {...register("firstName")}
        id="firstName"
        label="First Name"
        placeholder="First name"
      />
      <FormInput
        {...register("email")}
        id="email"
        label="E-mail"
        placeholder="E-mail"
        styles="col-span-2"
        type="email"
      />
      <FormInput
        {...register("password")}
        id="password"
        label="Password"
        placeholder="Password"
        type="password"
        styles="col-span-2"
        startSvg={<LockIcon />}
      />
      <p>{errors.password?.message}</p>
      <FormInput
        {...register("confirmPassword")}
        styles="col-span-2"
        id="confirm-password"
        label="Confirm password"
        placeholder="Password"
        type="password"
        startSvg={<LockIcon />}
      />
      <ButtonComponent
        disabled={isLoading}
        type="submit"
        bgcolor="bgblack"
        styles=" p-3 text-txwhite rounded-md font-semibold col-span-2"
        arialabeltext="Create account"
      >
        {isLoading ? <InfiniteSpinner /> : "Create account"}
      </ButtonComponent>
    </form>
  );
}
