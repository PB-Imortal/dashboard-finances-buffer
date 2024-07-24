import NotFoundSVG from "../assets/NotFoundCharacter.svg";
import ReturnHome from "../components/_atoms/ReturnBTN/ReturnHomeButton";

const NotFound = () => {
  return (
    <div className="bg-bggrey flex items-center justify-center min-h-screen">
      <ul className="flex flex-col md:flex-row items-center">
        <figure>
          <img src={NotFoundSVG} alt=""/>
        </figure>
        <li className="flex flex-col gap-16 items-center">
          <div className="flex flex-col font-inter text-center gap-5">
            <h1 className="text-base font-bold md:text-[24px]">
              Oops! Page Not Found (404)
            </h1>
            <h2 className="text-[13px] md:text-base">
              It looks like you got lost along the way. But don't worry, we're
              here to help!
            </h2>
          </div>
          <nav>
            <ReturnHome />
          </nav>
        </li>
      </ul>
    </div>
  );
};

export default NotFound;
