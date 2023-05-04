import { TextField } from "@mui/material";

interface TextBoxProps {
  properties: PropertiesProps;
}
interface PropertiesProps {
  name: string;
  label?: string;
  helperText?: string;
  type: string;
  isFullWidth?: boolean;
  placeholder?: string;
  inputProps?: object;
  value?: string | null;
  isUncontrolInput?: boolean;
  margin?: "none" | "dense" | "normal";
  autoFocus?: boolean;
}

const TextBox = ({ properties }: TextBoxProps) => {
  return (
    <TextField
      required
      fullWidth={properties.isFullWidth ? properties.isFullWidth : true}
      name={properties.name}
      type={properties.type}
      helperText={properties.helperText}
      label={properties.label}
      value={properties.isUncontrolInput ? properties.value || "" : undefined}
      placeholder={properties.placeholder ? properties.placeholder : undefined}
      InputProps={properties.inputProps}
      autoFocus={properties.autoFocus}
      margin={properties.margin}
    />
  );
};

export default TextBox;
