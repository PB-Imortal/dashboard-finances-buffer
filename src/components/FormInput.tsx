import { Input } from "@mui/base/Input";

interface FormInputProps {
  inputstyles: string;
  labelstyles: string;
  arialabeltext: string;
  placeholdertext: string;
  label: string;
  id: string;
}

export default function FormInput({
  inputstyles,
  labelstyles,
  arialabeltext,
  placeholdertext,
  label,
  id,
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
        aria-label={arialabeltext}
      ></Input>
    </div>
  );
}
