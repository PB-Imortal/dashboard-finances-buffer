<<<<<<< Updated upstream
import { ComponentPropsWithRef, ReactNode } from "react";
=======
import { ComponentPropsWithRef } from "react";
>>>>>>> Stashed changes
import { Button } from "@mui/base/Button";

interface ButtonProps extends ComponentPropsWithRef<"button"> {
  styles: string;
  arialabeltext: string;
<<<<<<< Updated upstream
  children?: ReactNode;
=======
  children: string;
>>>>>>> Stashed changes
}

export default function ButtonComponent({
  children,
  arialabeltext,
  ...rest
}: ButtonProps) {
  return (
    <Button
      className="p-3 bg-bgblack text-txwhite rounded-md font-semibold"
      aria-label={arialabeltext}
      {...rest}
    >
      {children}
    </Button>
  );
}
