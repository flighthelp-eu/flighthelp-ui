import React from "react";
import MuiTextField, {
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material/TextField";
import { TextFieldStyled, Title } from "./InputText.styles";

export interface TextFieldProps extends Omit<MuiTextFieldProps, "variant"> {
  variant?: "primary" | "secondary" | "error";
  title?: string;
}

const TextField = React.forwardRef<HTMLDivElement, TextFieldProps>(
  ({ variant = "primary", title, ...props }, ref) => {
    let muiProps: Partial<MuiTextFieldProps> = {
      fullWidth: true,
      variant: "outlined",
    };

    switch (variant) {
      case "primary":
        muiProps = {
          ...muiProps,
          color: "primary",
        };
        break;
      case "secondary":
        muiProps = {
          ...muiProps,
          color: "secondary",
        };
        break;
      case "error":
        muiProps = {
          ...muiProps,
          error: true,
        };
        break;
    }

    return (
      <>
        {title && <Title>{title}</Title>}
        <TextFieldStyled ref={ref} {...muiProps} {...props} />
      </>
    );
  }
);

TextField.displayName = "TextField";

export default TextField;
