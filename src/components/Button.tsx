import { ComponentPropsWithRef, ReactNode } from "react";
import { Button } from "@mui/base/Button";

interface ButtonProps extends ComponentPropsWithRef<"button"> {
  styles: string;
  arialabeltext: string;
  children?: ReactNode;
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
