import statementImg from "../assets/name-and-logo.svg";
import ButtonComponent from "../components/_atoms/Button";
import FormInput from "../components/_atoms/FormInput";
import Title from "../components/_atoms/Title";

export default function LoginPage() {
  return (
    <main className="font-inter flex flex-col items-center bg-bgpurple">
      <div className="h-72 w-full flex items-center justify-center">
        <img src={statementImg} alt="statement image" className="w-64 h-9" />
      </div>
      <section className="h-3/4 w-full flex flex-col justify-between p-3  border-solid rounded-t-2xl bg-bgwhite">
        <div className="flex flex-col gap-y-4 items-center">
          <Title>Log in</Title>
          <p className="w-72 text-center">
            Welcome to My Statement, please fill in the fields below to log into
            your account.
          </p>
        </div>
        <div className="flex flex-col mt-2 gap-y-2">
          <FormInput id="email" label="E-mail" placeholder="E-mail" />
          <FormInput id="password" label="Password" placeholder="Password" />
        </div>
        <div className="flex flex-col gap-y-2.5 justify-items-center justify-between mt-3">
          <ButtonComponent
            arialabeltext="Login button"
            bgcolor="bg-bgblack"
            textColor="text-txwhite"
            styles="h-12"
          >
            Log in
          </ButtonComponent>
          <p className="self-center">Or</p>
          <ButtonComponent
            arialabeltext="create account button"
            bgcolor="bg-bgwhite"
            textColor="text-txblack"
            styles="border border-zinc-600/[.35] h-12"
          >
            Create account
          </ButtonComponent>
        </div>
      </section>
    </main>
  );
}
