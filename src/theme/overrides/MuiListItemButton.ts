import { Theme, Components } from '@mui/material/styles';
import { darken } from '@mui/material';

export default (theme: Theme) => {
  const styleOverrides: Components['MuiListItemButton'] = {
    styleOverrides: {
      root: {
        '&.nav-bar-item': {
          cursor: 'pointer',
          borderRadius: '60px',
          color: theme.palette.common.black,

          backgroundColor: 'transparent',
          '&.MuiListItemButton-root-active': {
            backgroundColor: theme.palette.common.white,
          },
          '&.MuiListItemButton-root:hover': {
            color: 'initial',
            backgroundColor: darken(theme.palette.common.white, 0.1),

            '&.MuiListItemButton-root:hover .MuiListItemIcon-root': {
              color: theme.palette.primary.main,
            },
          },
        },
      },
    },
  };

  return styleOverrides;
};
