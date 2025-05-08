import { createTheme, Theme } from "@mui/material/styles";
import palette from "./palette";
import typography from "./typography";
import breakpoints from "./breakpoints";
import overrides from "./overrides";
import buttons from "./buttons";

const baseTheme: Theme = createTheme({
  typography,
  spacing: 4,
  palette,
  breakpoints,
});

const theme = createTheme(baseTheme, {
  components: {
    ...overrides(baseTheme),
    ...buttons(baseTheme),
  },
});

export default theme;