import { createTheme, Theme } from "@mui/material/styles";
import typography from "./typography";
import breakpoints from "./breakpoints";
import overrides from "./overrides/index";
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

  const componentsOverrides = overrides(baseTheme);
  const buttonOverrides = buttons(baseTheme);
  
  const flightHelpTheme = createTheme({
    typography,
    spacing: 4,
    palette: colors as any,
    breakpoints,
    components: {
      ...componentsOverrides,
      MuiButton: {
        ...componentsOverrides.MuiButton,
        ...buttonOverrides.MuiButton,
      } as any,
    },
  });

  return flightHelpTheme;
};

export default customCreateTheme;
