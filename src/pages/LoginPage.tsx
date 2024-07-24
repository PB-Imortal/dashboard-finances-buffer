import statementImg from "../assets/name-and-logo.svg";
import ButtonComponent from "../components/_atoms/Button";
import FormInput from "../components/_atoms/FormInput";
import Title from "../components/_atoms/Title";
import { Link } from "react-router-dom";
import LoginBg from "../assets/login-bg.svg";

export default function LoginPage() {
  return (
    <main className="h-screen font-inter flex flex-col lg:flex-row items-center bg-bgpurple">
      <div className="h-72 w-full flex items-center justify-center lg:flex-col lg:gap-16 lg:px-3 lg:w-1/2">
        <img src={statementImg} alt="statement image" className="w-64 h-9" />
        <img
          src={LoginBg}
          alt="woman looking at floating graphics"
          className="hidden lg:block"
        />
      </div>
      <section className="h-3/4 sm:w-full max-w-[30.75rem] lg:max-w-[50%] p-3  border-solid rounded-t-2xl md:rounded-2xl md:mb-5 lg:mb-0 lg:rounded-none lg:h-full lg:py-28 lg:px-20 md:justify-evenly bg-bgwhite">
        <form action="|" className="flex flex-col justify-evenly gap-8">
          <div className="flex flex-col gap-y-4 items-center">
            <Title>Log in</Title>
            <p className="w-72 text-center lg:w-[85%]">
              Welcome to My Statement, please fill in the fields below to log
              into your account.
            </p>
          </div>
          <div className="flex flex-col gap-y-2">
            <FormInput id="email" label="E-mail" placeholder="E-mail" />
            <FormInput id="password" label="Password" placeholder="Password" />
          </div>
          <div className="flex flex-col gap-y-2.5 justify-items-center justify-between ">
            <ButtonComponent
              arialabeltext="Login button"
              bgcolor="bg-bgblack"
              textColor="text-txwhite"
              styles="h-12"
              type="submit"
            >
              Log in
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
      </section>
    </main>
  );
}
