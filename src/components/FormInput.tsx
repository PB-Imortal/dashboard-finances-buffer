import { Input } from "@mui/base/Input";
import { ComponentPropsWithRef } from "react";

interface FormInputProps extends ComponentPropsWithRef<"input"> {
  inputstyles?: string;
  labelstyles?: string;
  placeholdertext: string;
  label: string;
  id: string;
}

export default function FormInput({
  inputstyles,
  labelstyles,
  placeholdertext,
  label,
  id,
  ...rest
}: FormInputProps) {
  return (
    <div>
      <label htmlFor={id} className={labelstyles}>
        {label}
      </label>
      <Input
        id={id}
        className={inputstyles}
        placeholder={placeholdertext}
        aria-label={label}
        {...rest}
      ></Input>
    </div>
  );
}
