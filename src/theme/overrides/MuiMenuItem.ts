import { Theme, Components } from '@mui/material/styles';

export default (theme: Theme) => {
  const styleOverrides: Components['MuiMenuItem'] = {
    defaultProps: {
      disableRipple: true,
    },
    styleOverrides: {
      root: {
        ...theme.typography.regularRegular,
      },
    },
  };
  return styleOverrides;
};
