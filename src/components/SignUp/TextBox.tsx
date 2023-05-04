import { Grid, TextField } from "@mui/material";

interface TextBoxProps {
  properties: PropertiesProps;
}
interface PropertiesProps {
  xs: number;
  sm?: number;
  name: string;
  label?: string;
  type: string;
  isFullWidth?: boolean;
  placeholder?: string;
  inputProps?: object;
  value?: string | null;
  isUncontrolInput?: boolean;
}

const TextBox = ({ properties }: TextBoxProps) => {
  return (
    <Grid item xs={properties.xs} sm={properties.sm}>
      <TextField
        required
        fullWidth={properties.isFullWidth ? properties.isFullWidth : true}
        name={properties.name}
        type={properties.type}
        helperText={properties.label}
        value={properties.isUncontrolInput ? properties.value || "" : undefined}
        placeholder={
          properties.placeholder ? properties.placeholder : undefined
        }
        InputProps={properties.inputProps}
      />
    </Grid>
  );
};

export default TextBox;
