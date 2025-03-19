import { Theme } from '@mui/material/styles';
declare const _default: (theme: Theme) => {
    defaultProps?: import('@mui/material/styles').ComponentsProps["MuiFormLabel"];
    styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').FormLabelClasses, "MuiFormLabel", unknown>> | undefined;
    variants?: {
        props: Partial<import('@mui/material').FormLabelProps> | ((props: Partial<import('@mui/material').FormLabelProps> & {
            ownerState: Partial<import('@mui/material').FormLabelProps>;
        }) => boolean);
        style: import('@mui/styled-engine').Interpolation<{
            theme: unknown;
        }>;
    }[] | undefined;
};
export default _default;
