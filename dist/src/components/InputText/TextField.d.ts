import { default as React } from 'react';
import { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField';
export interface TextFieldProps extends Omit<MuiTextFieldProps, "variant"> {
    variant?: "primary" | "secondary" | "error";
    title?: string;
}
declare const TextField: React.ForwardRefExoticComponent<Omit<TextFieldProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export default TextField;
