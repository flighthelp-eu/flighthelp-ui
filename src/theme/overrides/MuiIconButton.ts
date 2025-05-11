import { Theme, Components } from "@mui/material/styles";

export default (theme: Theme) => {
  const styleOverrides: Components["MuiIconButton"] = {
    styleOverrides: {
      root: {
        "&:focus": {
          backgroundColor: theme.palette.buttons?.iconButtonBackgroundFocus,
        },
      },
    },
  };
  return styleOverrides;
};
