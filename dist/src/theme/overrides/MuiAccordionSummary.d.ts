import { Theme } from '@mui/material/styles';
declare const _default: (theme: Theme) => {
    defaultProps?: import('@mui/material/styles').ComponentsProps["MuiAccordionSummary"];
    styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').AccordionSummaryClasses, "MuiAccordionSummary", unknown>> | undefined;
    variants?: {
        props: Partial<import('@mui/material').AccordionSummaryProps> | ((props: Partial<import('@mui/material').AccordionSummaryProps> & {
            ownerState: Partial<import('@mui/material').AccordionSummaryProps>;
        }) => boolean);
        style: import('@mui/styled-engine').Interpolation<{
            theme: unknown;
        }>;
    }[] | undefined;
};
export default _default;
