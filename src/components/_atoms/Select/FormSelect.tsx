import {
    ComponentPropsWithRef,
    ForwardedRef,
    forwardRef,
  } from "react";

interface FormSelectProps extends ComponentPropsWithRef<"select">{
    label: string;
    options: string[];
} 

export const FormSelect = forwardRef(({label, options, ...rest}: FormSelectProps, ref: ForwardedRef<HTMLSelectElement>) => {
    return (
    <div className="flex gap-3 items-center">
        <label>{label}</label>
        <select 
            {...rest}
            ref={ref}
            className="flex border p-3 rounded-md">
            {
                options.map(option => 
                <option 
                    className="font-[600]"
                    key={option} 
                    value={option}>
                    {option}
                </option>)
            }
        </select>
    </div>
  );
});
