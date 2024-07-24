import { Button } from "@mui/base/Button";
import { ComponentPropsWithRef, ReactNode } from "react";

interface ButtonProps extends ComponentPropsWithRef<"button"> {
  readonly styles?: string;
  readonly arialabeltext: string;
  readonly children?: ReactNode;
  readonly bgcolor: "bg-bgblack" | "bg-bgwhite";
  readonly textColor?: "text-txwhite" | "text-txblack";
}

export default function ButtonComponent({
  children,
  styles,
  arialabeltext,
  bgcolor,
  textColor,
  ...rest
}: ButtonProps) {
  return (
    <Button
      className={`p-3 ${bgcolor} ${textColor} rounded-md font-semibold ${styles}`}
      aria-label={arialabeltext}
      {...rest}
    >
      {children}
    </Button>
  );
}
