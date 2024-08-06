import { Input } from "@mui/base/Input";
import {
  ComponentPropsWithRef,
  ForwardedRef,
  forwardRef,
  ReactNode,
} from "react";

interface FormInputProps extends ComponentPropsWithRef<"input"> {
  label?: string
  id: string;
  styles?: string;
  startSvg?: ReactNode;
  endSvg?: ReactNode;
  error?: string;
}

const FormInput = forwardRef(
  (
    { styles, label, id, startSvg, endSvg, error, ...rest }: FormInputProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div ref={ref} className={`space-y-3 ${styles} flex flex-col`}>
        <div className="flex justify-between">
          <label htmlFor={id} className="font-semibold dark:text-txwhite">
            {label}
          </label>
          <span className="text-red-500">{error}</span>
        </div>
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
);

export default FormInput;
