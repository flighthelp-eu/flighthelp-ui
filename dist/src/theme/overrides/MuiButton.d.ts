import { Theme } from '@mui/material/styles';
declare const _default: (theme: Theme) => {
    defaultProps?: import('@mui/material/styles').ComponentsProps["MuiButton"];
    styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').ButtonClasses, "MuiButton", unknown>> | undefined;
    variants?: {
        props: Partial<import('@mui/material').ButtonProps> | ((props: Partial<import('@mui/material').ButtonProps> & {
            ownerState: Partial<import('@mui/material').ButtonProps>;
        }) => boolean);
        style: import('@mui/styled-engine').Interpolation<{
            theme: unknown;
        }>;
    }[] | undefined;
};
export default _default;
