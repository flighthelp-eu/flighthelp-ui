import { Theme } from '@mui/material/styles';
declare const _default: (theme: Theme) => {
    defaultProps?: import('@mui/material/styles').ComponentsProps["MuiInputBase"];
    styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').InputBaseClasses, "MuiInputBase", unknown>> | undefined;
    variants?: {
        props: Partial<import('@mui/material').InputBaseProps> | ((props: Partial<import('@mui/material').InputBaseProps> & {
            ownerState: Partial<import('@mui/material').InputBaseProps>;
        }) => boolean);
        style: import('@mui/styled-engine').Interpolation<{
            theme: unknown;
        }>;
    }[] | undefined;
};
export default _default;
