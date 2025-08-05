import React from "react";
import { TextFieldProps as MuiTextFieldProps } from "@mui/material/TextField";
import { TextFieldStyled, Title } from "./InputText.styles";
import { Stack, Typography } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";

export interface TextFieldProps extends Omit<MuiTextFieldProps, "variant"> {
  variant?: "primary" | "secondary" | "error" | "masked";
  title?: string;
  urlPrefix?: string;
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
      <Stack gap="4px">
        {title && (
          <Title sx={{ fontSize: { xs: "0.95rem", md: "1rem" } }}>
            {title}{" "}
            {props.required ? (
              <span
                style={{
                  paddingLeft: "2px",
                  color: "#C10000",
                }}
              >
                *
              </span>
            ) : (
              ""
            )}
          </Title>
        )}
        <TextFieldStyled
          ref={ref}
          {...muiProps}
          {...props}
          ownerState={{ variant }}
        />
      </Stack>
    );
  }
);

InputText.displayName = "TextField";

export default InputText;
