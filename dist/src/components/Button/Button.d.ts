import { default as React } from 'react';
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
declare function Button(props: ButtonProps): import("react/jsx-runtime").JSX.Element;
declare namespace Button {
    var displayName: string;
}
export default Button;
