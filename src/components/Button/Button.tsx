import React from "react";
import MuiButton from "@mui/material/Button";

export type ButtonVariant = "primary" | "secondary" | "system" | "text";

export interface ButtonProps {
  variant?: ButtonVariant;
  color?: string;
  className?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  [key: string]: any;
}

function Button(props: ButtonProps) {
  const { variant = "primary", children, className, ...rest } = props;

  let muiVariant = "contained";
  let muiColor = "primary";
  let buttonClassName = "";

  switch (variant) {
    case "primary":
      muiVariant = "contained";
      muiColor = "primary";
      break;
    case "secondary":
      muiVariant = "contained";
      muiColor = "secondary";
      break;
    case "system":
      muiVariant = "contained";
      buttonClassName = "system-button";
      break;
    case "text":
      muiVariant = "text";
      break;
  }

  return (
    <MuiButton
      variant={muiVariant as any}
      color={muiColor as any}
      className={
        buttonClassName ? `${buttonClassName} ${className || ""}` : className
      }
      disableElevation
      {...rest}
    >
      {children}
    </MuiButton>
  );
}

Button.displayName = "Button";

export default Button;
