import { default as React } from 'react';
import { ButtonProps as MuiButtonProps } from '@mui/material/Button';
export type ButtonVariant = "primary" | "secondary" | "system" | "text";
export interface ButtonProps extends Omit<MuiButtonProps, "variant"> {
    variant?: ButtonVariant;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
