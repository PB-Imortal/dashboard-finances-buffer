import { Link } from "react-router-dom";

const ReturnHomeButton = () => {
  return (
    <Link
      to="/"
      className="
      bg-bgwhite 
      text-[16]
      py-2
      px-4
      md:py-3.5 
      md:px-6 
      rounded-md 
      shadow-md 
      md:text-[24px] 
      font-bold 
      hover:bg-bgpurple
       hover:text-bgwhite 
       transition-all 
       duration-300 
       ease-in-out 
       hover:py-4"
    >
      Return to the homepage
    </Link>
  );
};

export default ReturnHomeButton;
