import { Theme, Components } from '@mui/material/styles';

export default (theme: Theme) => {
  const styleOverrides: Components['MuiFormLabel'] = {
    styleOverrides: {
      root: {
        '&.MuiFormLabel-root': {
          ...theme.typography.regularRegular,
        },
      },
    },
  };
  return styleOverrides;
};
