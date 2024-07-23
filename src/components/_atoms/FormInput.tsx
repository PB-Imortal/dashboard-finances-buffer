import { Input } from "@mui/base/Input";
import { ComponentPropsWithRef, ReactNode } from "react";

interface FormInputProps extends ComponentPropsWithRef<"input"> {
  label: string;
  id: string;
  styles?: string;
  startSvg?: ReactNode;
  endSvg?: ReactNode;
}

export default function FormInput({
  styles,
  label,
  id,
  startSvg,
  endSvg,
  ...rest
}: FormInputProps) {
  return (
    <div className={`space-y-3 ${styles} flex flex-col`}>
      <label htmlFor={id} className="font-semibold">
        {label}
      </label>
      <Input
        id={id}
        aria-label={label}
        {...rest}
        startAdornment={startSvg}
        endAdornment={endSvg}
      />
    </div>
  );
}
