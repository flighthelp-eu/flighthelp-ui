import React from "react";
import MuiTextField, {
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material/TextField";
import { TextFieldStyled, Title } from "./InputText.styles";
import { Typography } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";

export interface TextFieldProps extends Omit<MuiTextFieldProps, "variant"> {
  variant?: "primary" | "secondary" | "error" | "masked";
  title?: string;
  urlPrefix?: string; // Para la variante masked con URL
}

const InputText = React.forwardRef<HTMLDivElement, TextFieldProps>(
  ({ variant = "primary", title, urlPrefix = "https://", ...props }, ref) => {
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
      case "masked":
        muiProps = {
          ...muiProps,
          color: "primary",
          InputProps: {
            ...props.InputProps,
            startAdornment: (
              <InputAdornment
                position="start"
                sx={{
                  color: "#29374780",
                  p: 0,
                  marginRight: 0,
                }}
              >
                {urlPrefix}
              </InputAdornment>
            ),
          },
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
        <TextFieldStyled
          ref={ref}
          {...muiProps}
          {...props}
          sx={{
            "& .MuiOutlinedInput-input": {
              paddingLeft: "0px !important",
            },
          }}
        />
      </>
    );
  }
);

InputText.displayName = "TextField";

export default InputText;
