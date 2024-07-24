import { Link } from "react-router-dom";
import ButtonComponent from "../../_atoms/Button/Button";
import FormInput from "../../_atoms/Input/FormInput";
import LockIcon from "../../common/svg/LockIcon";
import { useForm } from "react-hook-form";
import {FormLoginField, formLogin} from "../../common/functions/validations"
import { zodResolver } from "@hookform/resolvers/zod";
import InfiniteSpinner from "../../common/svg/InfiniteSpinner";

export default function FormLogin() {
  const {
    register,
    handleSubmit,
    formState: {errors, isSubmitting}
  } = useForm<FormLoginField> ({
    resolver: zodResolver(formLogin)
  })


  function handleLogin({email, password}: FormLoginField){
    console.log({email, password})
  }

  return (
    <form
      action="|"
      className="flex flex-col justify-evenly xl:w-[75%] 2xl:w-[65%] lg:m-auto gap-8 mt"
      onSubmit={handleSubmit(handleLogin)}
    >
      <div className="flex flex-col gap-y-2 mt-5">
        <FormInput 
          {...register('email')}
          id="email" 
          label="E-mail" 
          placeholder="E-mail"
          error={errors.email?.message}
        />
        <FormInput
          {...register('password')}
          id="password"
          label="Password"
          placeholder="Password"
          startSvg={<LockIcon />}
          error={errors.password?.message}
        />
      </div>
      <div className="flex flex-col gap-y-2.5 justify-items-center justify-between ">
        <ButtonComponent
          arialabeltext="Login button"
          bgcolor="bg-bgblack"
          textColor="text-txwhite"
          styles="h-12"
          type="submit"
        >
          { isSubmitting ? <InfiniteSpinner/>: "Log in"}
        </ButtonComponent>
        <p className="self-center">Or</p>
        <Link
          to={"/signin"}
          aria-label="create account button"
          className="border border-zinc-600/[.35] h-12 flex justify-center items-center bg-bgwhite text-txblack rounded-md"
        >
          Create account
        </Link>
      </div>
    </form>
  );
}
