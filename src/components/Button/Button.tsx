import React from "react";
import MuiButton, { ButtonProps as MuiButtonProps } from "@mui/material/Button";

export type ButtonVariant = "primary" | "secondary" | "system" | "text";

export interface ButtonProps extends Omit<MuiButtonProps, "variant"> {
  variant?: ButtonVariant;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { variant = "primary", children, ...rest } = props;

  let muiVariant: MuiButtonProps["variant"] = "contained";
  let color: MuiButtonProps["color"] = "primary";
  let className = "";

  switch (variant) {
    case "primary":
      muiVariant = "contained";
      color = "primary";
      break;
    case "secondary":
      muiVariant = "contained";
      color = "secondary";
      break;
    case "system":
      muiVariant = "contained";
      className = "system-button";
      break;
    case "text":
      muiVariant = "text";
      break;
  }

  return (
    <MuiButton
      variant={muiVariant}
      color={color}
      className={
        className ? `${className} ${rest.className || ""}` : rest.className
      }
      disableElevation
      {...rest}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
