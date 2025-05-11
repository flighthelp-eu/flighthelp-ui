import { createTheme, Theme } from "@mui/material/styles";
import typography from "./typography";
import breakpoints from "./breakpoints";
import overrides from "./overrides";
import buttons from "./buttons";
import palette from "./palette";

const getColors = (type: string) => {
  if (type === "zaborAjutor") {
    return palette.paletteZborAjutor;
  }

  return palette.paletteFlightHelp;
};

export const customCreateTheme = (type: string) => {
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
