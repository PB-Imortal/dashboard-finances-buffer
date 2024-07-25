import { zodResolver } from "@hookform/resolvers/zod";
import { Snackbar } from "@mui/base";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../../_atoms/Button/Button";
import FormInput from "../../_atoms/Input/FormInput";
import {
  CreateAccountFields,
  formCreateAccount,
} from "../../common/functions/validations";
import InfiniteSpinner from "../../common/svg/InfiniteSpinner";
import LockIcon from "../../common/svg/LockIcon";
import OkIcon from "../../common/svg/OkIcon";

export default function FormCreateAccount() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateAccountFields>({
    resolver: zodResolver(formCreateAccount),
  });
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  function onSubmit(data: CreateAccountFields) {
    // envia os dados para o servidor
    console.log(data);
    setOpen(true);
    reset();
    setInterval(() => {
      navigate("/");
    }, 3000);
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-2 gap-x-8 gap-y-4 max-w-[492px] min-w-[288px] m-auto"
    >
      <FormInput
        {...register("lastName")}
        id="lastName"
        label="Last Name"
        placeholder="Last name"
        error={errors.lastName?.message}
      />
      <FormInput
        {...register("firstName")}
        id="firstName"
        label="First Name"
        placeholder="First name"
        error={errors.firstName?.message}
      />
      <FormInput
        {...register("email")}
        id="email"
        label="E-mail"
        placeholder="E-mail"
        styles="col-span-2"
        type="email"
        error={errors.email?.message}
      />
      <FormInput
        {...register("password")}
        id="password"
        label="Password"
        placeholder="Password"
        type="password"
        styles="col-span-2"
        startSvg={<LockIcon />}
        error={errors.password?.message}
      />
      <FormInput
        {...register("confirmPassword")}
        styles="col-span-2"
        id="confirm-password"
        label="Confirm password"
        placeholder="Password"
        type="password"
        startSvg={<LockIcon />}
        error={errors.confirmPassword?.message}
      />
      <ButtonComponent
        disabled={isSubmitting}
        bgcolor="bg-bgblack"
        type="submit"
        styles=" p-3 text-txwhite rounded-md font-semibold col-span-2"
        arialabeltext="Create account"
      >
        {isSubmitting ? <InfiniteSpinner /> : "Create account"}
      </ButtonComponent>
      <Snackbar
        data-testid="snackbar"
        className="fixed bottom-1 w-11/12 gap-x-2 flex items-center left-1 rounded-2xl bg-bgblack text-white py-4 px-8"
        autoHideDuration={2000}
        onClose={() => setOpen(false)}
        open={open}
        exited={true}
      >
        <OkIcon />
        <p>Registration completed</p>
      </Snackbar>
    </form>
  );
}
