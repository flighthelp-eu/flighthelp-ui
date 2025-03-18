import { Theme } from '@mui/material/styles';

export default (theme: Theme) => {
  return {
    styleOverrides: {
      root: {
        '&.Mui-selected': {
          backgroundColor: `${theme.palette.primary.main} !important`,
        },
      },
    },
  };
};
