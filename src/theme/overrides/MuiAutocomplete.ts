import { Theme, Components } from '@mui/material/styles';

export default (theme: Theme) => {
  const styleOverrides: Components['MuiAutocomplete'] = {
    styleOverrides: {
      listbox: {
        ...theme.typography.regularRegular,
      },
      noOptions: {
        ...theme.typography.regularRegular,
      },
      loading: {
        ...theme.typography.regularRegular,
      },
    },
  };
  return styleOverrides;
};
