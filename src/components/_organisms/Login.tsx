import Title from "../_atoms/Tittle/Title";
import FormLogin from "../_molecules/log-in/FormLogin";

export default function Login() {
  return (
    <section className="h-3/4 sm:w-full max-w-[30.75rem] lg:max-w-[50%] p-3  border-solid rounded-t-2xl md:rounded-2xl md:mb-5 lg:mb-0 lg:rounded-none lg:h-full lg:py-28 lg:px-20 md:justify-evenly bg-bgwhite">
      <div className="flex flex-col gap-y-4 items-center lg:mt-20">
        <Title>Log in</Title>
        <p className="w-[90%] text-center lg:w-[85%] xl:w-[70%] 2xl:w-[60%]">
          Welcome to My Statement, please fill in the fields below to log into
          your account.
        </p>
      </div>
      <FormLogin />
    </section>
  );
}
