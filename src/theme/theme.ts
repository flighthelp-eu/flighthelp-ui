import { createTheme, Theme } from "@mui/material/styles";
import typography from "./typography";
import breakpoints from "./breakpoints";
import overrides from "./overrides";
import buttons from "./buttons";
import palette from "./palette";

type themeType = "zaborAjutor" | "flightHelp";

const getColors = (type: themeType) => {
  if (type === "zaborAjutor") {
    return palette.paletteZborAjutor;
  }

  return palette.paletteFlightHelp;
};

export const customCreateTheme = (type: themeType) => {
  const colors = getColors(type);

  const baseTheme: Theme = createTheme({
    typography,
    spacing: 4,
    palette: colors,
    breakpoints,
  });

  const flightHelpTheme = createTheme(baseTheme, {
    components: {
      ...overrides(baseTheme),
      ...buttons(baseTheme),
    },
  });

  return flightHelpTheme;
};

export default customCreateTheme;
