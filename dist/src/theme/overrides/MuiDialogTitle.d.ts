import { Theme } from '@mui/material/styles';
declare const _default: (theme: Theme) => {
    defaultProps?: import('@mui/material/styles').ComponentsProps["MuiDialogTitle"];
    styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<"root", "MuiDialogTitle", unknown>> | undefined;
    variants?: {
        props: Partial<import('@mui/material').DialogTitleProps> | ((props: Partial<import('@mui/material').DialogTitleProps> & {
            ownerState: Partial<import('@mui/material').DialogTitleProps>;
        }) => boolean);
        style: import('@mui/styled-engine').Interpolation<{
            theme: unknown;
        }>;
    }[] | undefined;
};
export default _default;
