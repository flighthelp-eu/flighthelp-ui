import { Theme, Components } from '@mui/material/styles';

export default (theme: Theme) => {
  const styleOverrides: Components['MuiButtonBase'] = {
    defaultProps: {
      disableRipple: true,
    },
  };

  return styleOverrides;
};
