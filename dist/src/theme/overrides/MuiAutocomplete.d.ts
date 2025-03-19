import { Theme } from '@mui/material/styles';
declare const _default: (theme: Theme) => {
    defaultProps?: import('@mui/material/styles').ComponentsProps["MuiAutocomplete"];
    styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').AutocompleteClasses, "MuiAutocomplete", unknown>> | undefined;
    variants?: {
        props: Partial<import('@mui/material').AutocompleteProps<any, any, any, any, "div">> | ((props: Partial<import('@mui/material').AutocompleteProps<any, any, any, any, "div">> & {
            ownerState: Partial<import('@mui/material').AutocompleteProps<any, any, any, any, "div">>;
        }) => boolean);
        style: import('@mui/styled-engine').Interpolation<{
            theme: unknown;
        }>;
    }[] | undefined;
};
export default _default;
