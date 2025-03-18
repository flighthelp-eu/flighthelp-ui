import { Theme, Components } from '@mui/material/styles';

export default (theme: Theme) => {
  const appBarStyleOverrides: Components['MuiDialogTitle'] = {
    styleOverrides: {
      root: {
        ...theme.typography.h1Medium,
        backgroundColor: theme.palette.backgrounds.system,
      },
    },
  };
  return appBarStyleOverrides;
};
