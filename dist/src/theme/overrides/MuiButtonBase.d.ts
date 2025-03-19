import { Theme } from '@mui/material/styles';
declare const _default: (theme: Theme) => {
    defaultProps?: import('@mui/material/styles').ComponentsProps["MuiButtonBase"];
    styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').ButtonBaseClasses, "MuiButtonBase", unknown>> | undefined;
    variants?: {
        props: Partial<import('@mui/material').ButtonBaseProps> | ((props: Partial<import('@mui/material').ButtonBaseProps> & {
            ownerState: Partial<import('@mui/material').ButtonBaseProps>;
        }) => boolean);
        style: import('@mui/styled-engine').Interpolation<{
            theme: unknown;
        }>;
    }[] | undefined;
};
export default _default;
