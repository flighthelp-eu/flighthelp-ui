import { default as React } from 'react';
export type ButtonVariant = "primary" | "secondary" | "system" | "text" | "outline" | "secondaryOutlined" | "primaryBlue" | "primaryOutline" | "transparent" | "secondaryOrange" | "primaryMain";
export interface ButtonProps {
    variant?: ButtonVariant;
    color?: "primary" | "secondary" | "success" | "error" | "info" | "warning" | undefined;
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
