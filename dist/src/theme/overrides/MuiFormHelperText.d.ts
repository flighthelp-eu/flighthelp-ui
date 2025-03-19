import { Theme } from '@mui/material/styles';
declare const _default: (theme: Theme) => {
    defaultProps?: import('@mui/material/styles').ComponentsProps["MuiFormHelperText"];
    styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').FormHelperTextClasses, "MuiFormHelperText", unknown>> | undefined;
    variants?: {
        props: Partial<import('@mui/material').FormHelperTextProps> | ((props: Partial<import('@mui/material').FormHelperTextProps> & {
            ownerState: Partial<import('@mui/material').FormHelperTextProps>;
        }) => boolean);
        style: import('@mui/styled-engine').Interpolation<{
            theme: unknown;
        }>;
    }[] | undefined;
};
export default _default;
