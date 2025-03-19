import { Theme } from '@mui/material/styles';
declare const _default: (theme: Theme) => {
    defaultProps?: import('@mui/material').ComponentsProps["MuiListItemButton"];
    styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').ListItemButtonClasses, "MuiListItemButton", unknown>> | undefined;
    variants?: {
        props: Partial<import('@mui/material').ListItemButtonProps> | ((props: Partial<import('@mui/material').ListItemButtonProps> & {
            ownerState: Partial<import('@mui/material').ListItemButtonProps>;
        }) => boolean);
        style: import('@mui/styled-engine').Interpolation<{
            theme: unknown;
        }>;
    }[] | undefined;
};
export default _default;
