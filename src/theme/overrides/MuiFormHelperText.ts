import { Theme, Components } from '@mui/material/styles';

export default (theme: Theme) => {
  const styleOverrides: Components['MuiFormHelperText'] = {
    styleOverrides: {
      root: {
        fontSize: '10px',
        margin: '3px 14px 0',
      },
    },
  };
  return styleOverrides;
};
