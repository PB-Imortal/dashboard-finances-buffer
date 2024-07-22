import { Input } from "@mui/base/Input";

interface FormInputProps {
  inputstyles: string;
  labelstyles: string;
  arialabeltext: string;
  placeholdertext: string;
  label: string;
}

export default function FormInput({
  inputstyles,
  labelstyles,
  arialabeltext,
  placeholdertext,
  label,
}: FormInputProps) {
  return (
    <div>
      <label className={labelstyles}>{label}</label>
      <Input
        className={inputstyles}
        placeholder={placeholdertext}
        aria-label={arialabeltext}
      ></Input>
    </div>
  );
}
