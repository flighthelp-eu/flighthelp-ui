import { Theme } from '@mui/material/styles';
declare const _default: (theme: Theme) => {
    defaultProps?: import('@mui/material/styles').ComponentsProps["MuiTableCell"];
    styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').TableCellClasses, "MuiTableCell", unknown>> | undefined;
    variants?: {
        props: Partial<import('@mui/material').TableCellProps> | ((props: Partial<import('@mui/material').TableCellProps> & {
            ownerState: Partial<import('@mui/material').TableCellProps>;
        }) => boolean);
        style: import('@mui/styled-engine').Interpolation<{
            theme: unknown;
        }>;
    }[] | undefined;
};
export default _default;
