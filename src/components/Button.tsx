import React from "react";

interface ButtonProps {
  text: string;
  styles: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, styles, onClick }) => {
  return (
    <button className={styles} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
