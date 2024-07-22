import { Input } from "@mui/base/Input";

interface FormInputProps {
  styles: string;
  arialabeltext: string;
  placeholdertext: string;
}

export default function FormInput({
  styles,
  arialabeltext,
  placeholdertext,
}: FormInputProps) {
  return (
    <Input
      className={styles}
      placeholder={placeholdertext}
      aria-label={arialabeltext}
    ></Input>
  );
}
