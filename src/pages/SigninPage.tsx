import SignIn from "../components/_organisms/SignIn";

export default function SignInPage() {
  return (
    <main className="h-dvh bg-bgpurple flex flex-col lg:flex-row">
      <div className="bg-bgpurple flex-1 content-center flex flex-col items-center justify-evenly ">
        <img
          className="lg:w-[364px] lg:h-[54px] w-[250px] h-[37px]"
          src="/src/assets/name-and-logo.svg"
          alt="Website logo, a white sphere and on the right side the writing My Statement"
        />
        <img
          className="hidden lg:block"
          src="/src/assets/login-bg.svg"
          alt=""
        />
      </div>
      <SignIn />
    </main>
  );
}
