import LoginBg from "../assets/login-bg.webp";
import statementImg from "../assets/name-and-logo.svg";
import Login from "../components/_organisms/Login/Login";

export default function LoginPage() {
  return (
    <main className="h-screen font-inter flex flex-col lg:flex-row items-center bg-bgpurple">
      <div className="h-72 w-full flex items-center justify-center lg:flex-col lg:gap-16 lg:px-3 lg:w-1/2">
        <img
          src={statementImg}
          alt="Website logo, a white sphere and on the right side the writing My Statement"
          className="w-64 h-9 lg:w-[364px] lg:h-[54px] mb-2"
        />
        <img
          src={LoginBg}
          alt="woman looking at floating graphics"
          className="hidden lg:block max-w-[618.75px]"
        />
      </div>
      <Login />
    </main>
  );
}
