import { Link, useNavigate } from "react-router-dom";
import ButtonComponent from "../../_atoms/Button/Button";
import FormInput from "../../_atoms/Input/FormInput";
import LockIcon from "../../../common/svg/LockIcon";
import { useForm } from "react-hook-form";
import {
  FormLoginField,
  formLogin,
} from "../../../common/functions/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import InfiniteSpinner from "../../../common/svg/InfiniteSpinner";
import { Snackbar } from "@mui/base";
import { useContext, useState } from "react";
import OkIcon from "../../../common/svg/OkIcon";
import { loginUser } from "../../../common/functions/api";
import { AuthContext } from "../../../providers/context/AuthContext";

export default function FormLogin() {
  const [openSnack, setOpenSnack] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { setIsLoggedIn, setUserId } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormLoginField>({
    resolver: zodResolver(formLogin),
  });

  async function handleLogin({ email, password }: FormLoginField) {
    //consulta os dados no servidor e manda o usuário para a home
    const response = await loginUser({ email, password });
    console.log(response);

    if (response) {
      if (response.errors) {
        setError(response.errors);
      }
      if (response.data) {
        setIsLoggedIn(true);
        setUserId(response.data);
        reset();
        setOpenSnack((prevState) => !prevState);
        setInterval(() => {
          navigate("/");
        }, 4000);
      }
    }
  }

  return (
    <form
      action="|"
      className="flex flex-col justify-evenly xl:w-[75%] 2xl:w-[65%] lg:m-auto gap-8 mt"
      onSubmit={handleSubmit(handleLogin)}
    >
      <div className="flex flex-col gap-y-2 mt-5">
        <FormInput
          {...register("email")}
          id="email"
          label="E-mail"
          placeholder="E-mail"
          type="email"
          error={errors.email?.message}
        />
        <FormInput
          {...register("password")}
          id="password"
          label="Password"
          placeholder="Password"
          startSvg={<LockIcon />}
          type="password"
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
          {isSubmitting ? <InfiniteSpinner /> : "Log in"}
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
      {error && (
        <p className="text-red-500 text-sm col-span-2 text-center">{error}</p>
      )}
      <Snackbar
        onClose={() => setOpenSnack((prevState) => !prevState)}
        open={openSnack}
        autoHideDuration={3000}
        exited={true}
        className=" fixed bottom-1 left-2 w-[99%] rounded-2xl flex items-center bg-bgblack text-txwhite gap-3 py-4 px-8"
      >
        <OkIcon />
        <p>Successfully Logged In</p>
      </Snackbar>
    </form>
  );
}
