import { Theme } from '@mui/material/styles';
declare const _default: (theme: Theme) => {
    defaultProps?: import('@mui/material/styles').ComponentsProps["MuiMenuItem"];
    styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').MenuItemClasses, "MuiMenuItem", unknown>> | undefined;
    variants?: {
        props: Partial<import('@mui/material').MenuItemProps> | ((props: Partial<import('@mui/material').MenuItemProps> & {
            ownerState: Partial<import('@mui/material').MenuItemProps>;
        }) => boolean);
        style: import('@mui/styled-engine').Interpolation<{
            theme: unknown;
        }>;
    }[] | undefined;
};
export default _default;
