import { Theme, Components } from "@mui/material/styles";

export default (theme: Theme) => {
  const styleOverrides: Components["MuiInputBase"] = {
    styleOverrides: {
      input: {
        ...theme.typography.regularRegular,
      },
    },
  };
  return styleOverrides;
};
