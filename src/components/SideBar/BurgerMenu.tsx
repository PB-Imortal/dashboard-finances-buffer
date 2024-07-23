import React from 'react';

interface BurgerMenuProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ isOpen, setIsOpen }) => {
  return (
    <button
      className={`fixed top-0 left-0 p-4 m-4 rounded flex flex-col justify-center items-center gap-1 ${isOpen ? "z-20" : "z-60"}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <span className="block w-5 h-0.5 bg-black"></span>
      <span className="block w-5 h-0.5 bg-black"></span>
      <span className="block w-5 h-0.5 bg-black"></span>
    </button>
  );
};

export default BurgerMenu;