import React from "react";

interface BurgerMenuProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ isOpen, setIsOpen }) => {
  return (
<main
    <button data-testid="burger-menu"
      className={`my-auto ml-2 bg-bgwhite px-4 py-9 rounded flex flex-col justify-center items-center gap-1 ${isOpen ? "z-20" : "z-60"}`}

      onClick={() => setIsOpen(!isOpen)}
    >
      <span className="block w-5 h-0.5 bg-black"></span>
      <span className="block w-5 h-0.5 bg-black"></span>
      <span className="block w-5 h-0.5 bg-black"></span>
    </button>
  );
};

export default BurgerMenu;
