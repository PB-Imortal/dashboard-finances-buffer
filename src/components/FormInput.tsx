import { Input } from "@mui/base/Input";
import { ComponentPropsWithRef } from "react";

interface FormInputProps extends ComponentPropsWithRef<"input"> {
  label: string;
  id: string;
  styles?: string;
}

export default function FormInput({
  styles,
  label,
  id,
  ...rest
}: FormInputProps) {
  return (
    <div className={`space-y-3 ${styles} flex flex-col`}>
      <label htmlFor={id} className="font-semibold">
        {label}
      </label>
      <Input id={id} aria-label={label} {...rest} />
    </div>
  );
}
