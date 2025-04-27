import React from "react";
import MuiTextField, {
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material/TextField";
import { TextFieldStyled, Title } from "./InputText.styles";
import { Typography } from "@mui/material";

export interface TextFieldProps extends Omit<MuiTextFieldProps, "variant"> {
  variant?: "primary" | "secondary" | "error";
  title?: string;
}

const InputText = React.forwardRef<HTMLDivElement, TextFieldProps>(
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
        {title && (
          <Title>
            {title}{" "}
            {props.required ? (
              <Typography
                sx={{ fontSize: 20, pl: 0.3, display: "block" }}
                color="#C10000"
              >
                *
              </Typography>
            ) : (
              ""
            )}
          </Title>
        )}
        <TextFieldStyled ref={ref} {...muiProps} {...props} />
      </>
    );
  }
);

InputText.displayName = "TextField";

export default InputText;
