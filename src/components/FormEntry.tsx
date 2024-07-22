import React from "react";
import { Input } from "@mui/base/Input";

interface FormEntryProps {
  styles: string;
  arialabeltext: string;
  placeholdertext: string;
}

const FormEntry: React.FC<FormEntryProps> = ({
  styles,
  arialabeltext,
  placeholdertext,
}) => {
  return (
    <Input
      className={styles}
      placeholder={placeholdertext}
      aria-label={arialabeltext}
    ></Input>
  );
};

export default FormEntry;
