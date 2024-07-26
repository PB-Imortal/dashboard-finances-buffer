import Title from "../_atoms/Title";
import homeBg from "../../assets/home-bg.svg";
export default function Home() {
  return (
    <section className="flex flex-col place-items-center m-auto text-center mt-[8vh]">
      <Title>Welcome to My statement</Title>
      <img
        className="p-16 "
        src={homeBg}
        alt="finance background with paper dollars and currency, a calculator a magnifying glass and a sheet with graphs. On the front there is a woman in dark clothes placed placing a coin in a purple piggy bank."
      />
      <p>
        Now that you are logged in, you can view your statement and change you
        profile. Enjoy!
      </p>
    </section>
  );
}
