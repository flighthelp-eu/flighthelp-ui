import { Theme, Components } from '@mui/material/styles';

export default (theme: Theme) => {
  const styleOverrides: Components['MuiTableCell'] = {
    styleOverrides: {
      body: {
        ...theme.typography.smallRegular,
      },
      head: {
        ...theme.typography.smallBold,
      },
    },
  };
  return styleOverrides;
};
