import { useContext } from "react";
import Home from "../components/_organisms/Home";
import { AuthContext } from "../providers/context/AuthContext";

export default function HomePage() {
  const { isLoggedIn, userId } = useContext(AuthContext);

  console.log(isLoggedIn, userId);

  return (
    <section className="m-3 flex dark:bg-dkrbgblue">
      {/* The DarkMode is just a experimental test, enjoy it */}
      <Home />
    </section>
  );
}
