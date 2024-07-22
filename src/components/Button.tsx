import { ComponentPropsWithRef, ReactNode } from "react"
import { Button } from "@mui/base/Button"

interface ButtonProps extends ComponentPropsWithRef<"button"> {
  styles: string;
  arialabeltext: string;
  children?: ReactNode;
}

export default function ButtonComponent({
  children,
  styles,
  arialabeltext,
  ...rest
}: ButtonProps) {
  return (
    <Button className={styles} aria-label={arialabeltext} {...rest}>
      {children}
    </Button>
  );
}
