import { createTheme, Theme } from "@mui/material/styles";
import palette from "./palette";
import typography from "./typography";
import breakpoints from "./breakpoints";
import overrides from "./overrides";

const baseTheme: Theme = createTheme({
  typography,
  spacing: 4,
  palette,
  breakpoints,
});

const theme = createTheme({
  ...baseTheme,
  components: {
    ...baseTheme.components,
    ...overrides(baseTheme),
  },
});

export default theme;
