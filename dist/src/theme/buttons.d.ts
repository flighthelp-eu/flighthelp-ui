import { Theme } from '@mui/material';
export default function buttons(theme: Theme): {
    MuiButton: {
        defaultProps: {
            disableElevation: boolean;
        };
        styleOverrides: {
            root: {
                textTransform: string;
                borderRadius: string;
            };
            sizeMedium: {
                padding: string;
            };
            sizeLarge: {
                padding: string;
            };
            sizeSmall: {
                padding: string;
            };
        };
        variants: ({
            props: {
                variant: string;
            };
            style: {
                backgroundColor: string;
                color: string;
                "&:hover": {
                    backgroundColor: any;
                    color: string;
                    opacity?: undefined;
                };
                "&:focus": {
                    backgroundColor: any;
                    border: string;
                    borderColor?: undefined;
                };
                "&.Mui-disabled": {
                    backgroundColor: string;
                    color: string;
                    borderColor: string;
                };
                borderColor?: undefined;
                border?: undefined;
            };
        } | {
            props: {
                variant: string;
            };
            style: {
                backgroundColor: string;
                color: string;
                borderColor: string;
                "&:hover": {
                    backgroundColor: string;
                    color?: undefined;
                    opacity?: undefined;
                };
                "&:focus": {
                    backgroundColor: string;
                    border: string;
                    borderColor?: undefined;
                };
                "&.Mui-disabled": {
                    backgroundColor: string;
                    color: string;
                    borderColor: string;
                };
                border?: undefined;
            };
        } | {
            props: {
                variant: string;
            };
            style: {
                backgroundColor: string;
                color: string;
                border: string;
                "&:hover": {
                    backgroundColor: string;
                    color?: undefined;
                    opacity?: undefined;
                };
                "&:focus": {
                    borderColor: string;
                    border: string;
                    backgroundColor?: undefined;
                };
                "&.Mui-disabled": {
                    backgroundColor: string;
                    color: string;
                    borderColor: string;
                };
                borderColor?: undefined;
            };
        } | {
            props: {
                variant: string;
            };
            style: {
                backgroundColor: string;
                color: string;
                border: string;
                "&:hover": {
                    backgroundColor: string;
                    color: string;
                    opacity?: undefined;
                };
                "&:focus": {
                    backgroundColor: string;
                    border: string;
                    borderColor?: undefined;
                };
                "&.Mui-disabled": {
                    backgroundColor: string;
                    color: string;
                    borderColor: string;
                };
                borderColor?: undefined;
            };
        } | {
            props: {
                variant: string;
            };
            style: {
                color: string;
                border: string;
                "&:hover": {
                    opacity: number;
                    backgroundColor?: undefined;
                    color?: undefined;
                };
                "&:focus": {
                    border: string;
                    backgroundColor?: undefined;
                    borderColor?: undefined;
                };
                "&.Mui-disabled": {
                    backgroundColor: string;
                    color: string;
                    borderColor: string;
                };
                backgroundColor?: undefined;
                borderColor?: undefined;
            };
        })[];
    };
};
