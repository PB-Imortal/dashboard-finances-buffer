import SignIn from "../components/_organisms/SignIn";

export default function SignInPage() {
  return (
    <section className="h-dvh bg-bgpurple flex flex-col lg:flex-row">
      <div className="bg-bgpurple flex-1 content-center flex flex-col items-center justify-evenly ">
        <img
          className="lg:w-[364px] lg:h-[54px] w-[250px] h-[37px]"
          src="/src/assets/name-and-logo.svg"
          alt="Website logo, a black sphere and on the right side the writing My Statement"
        />
        <img
          className="hidden lg:block"
          src="/src/assets/login-bg.svg"
          alt=""
        />
      </div>
      <div className="bg-transparent lg:bg-white lg:w-1/2 flex place-content-center">
        <SignIn />
      </div>
    </section>
  );
}
