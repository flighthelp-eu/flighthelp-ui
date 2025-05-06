import React from "react";
import MuiButton from "@mui/material/Button";

export type ButtonVariant = 
  | "primary" 
  | "secondary" 
  | "system" 
  | "text" 
  | "outline"
  | "btn-lg-secondary-main-filled";

export interface ButtonProps {
  variant?: ButtonVariant;
  color?: "primary" | "secondary" | "success" | "error" | "info" | "warning" | undefined; 
  className?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  [key: string]: any;
}

function Button(props: ButtonProps) {
  const { variant = "primary", children, className, color, ...rest } = props;
  
  if (variant === "btn-lg-secondary-main-filled") {
    return (
      <MuiButton
        {...{
          variant: variant,
          className,
          disableElevation: true,
          ...rest
        } as any}
      >
        {children}
      </MuiButton>
    );
  }
  
  let muiVariant: "text" | "outlined" | "contained" = "contained";
  let muiColor: "primary" | "secondary" | "inherit" | "success" | "error" | "info" | "warning" | undefined = "primary";
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
      variant={muiVariant}
      color={muiColor}
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