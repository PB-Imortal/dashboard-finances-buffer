import Title from "../_atoms/Title/Title";
import FormCreateAccount from "../_molecules/sign-in/FormCreateAccount";

export default function SignIn() {
  return (
    <section className="bg-white space-y-8 lg:h-full flex-col place-content-center lg:w-[50%] m-auto py-6 px-4 lg:rounded-none rounded-2xl">
      <div className="text-center space-y-8">
        <Title>Create account</Title>
        <p>Please fill in the fields below to create an account.</p>
      </div>
      <FormCreateAccount />
    </section>
  );
}
