import { Theme, Components } from '@mui/material/styles';

export default (theme: Theme) => {
  const styleOverrides: Components['MuiButton'] = {
    defaultProps: {
      disableRipple: true,
      variant: 'primary',
    },
    styleOverrides: {
      root: {},
      contained: {
        color: theme.palette.common.white,
        '&:hover': {
          color: theme.palette.common.black,
        },
      },
    },
  };

  return styleOverrides;
};
