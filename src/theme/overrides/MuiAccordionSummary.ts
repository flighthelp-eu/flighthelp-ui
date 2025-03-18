import { Theme, Components } from '@mui/material/styles';

export default (theme: Theme) => {
  const styleOverrides: Components['MuiAccordionSummary'] = {
    styleOverrides: {
      expandIconWrapper: {
        color: theme.palette.secondary.main,
      },
    },
  };
  return styleOverrides;
};
