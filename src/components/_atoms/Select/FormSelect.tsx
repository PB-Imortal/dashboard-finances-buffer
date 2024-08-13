import {
    ComponentPropsWithRef,
    ForwardedRef,
    forwardRef,
  } from "react";

export interface FormSelectProps extends ComponentPropsWithRef<"select">{
    label: string;
    forwId: string;
    options: string[];
} 

export const FormSelect = forwardRef(({label, forwId, options, ...rest}: FormSelectProps, ref: ForwardedRef<HTMLSelectElement>) => {
    return (
    <div className="flex gap-3 items-center">
        <label htmlFor={forwId}>{label}</label>
        <select 
            {...rest}
            ref={ref}
            id={forwId}
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
