import { Theme } from '@mui/material/styles';
import { fontFamily } from '../typography';

export default (theme: Theme) => {
  return {
    styleOverrides: {
      root: {
        fontFamily,
      },
    },
  };
};
