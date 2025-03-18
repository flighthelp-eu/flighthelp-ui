import { PaletteOptions } from "@mui/material/styles";

const palette: PaletteOptions = {
  mode: "light",
  common: {
    white: "#FFFFFF",
    black: "#000000",
  },
  primary: {
    light: "#EDEFF2",
    main: "#20ABAD",
    dark: "#E64722",
  },
  secondary: {
    light: "#EDEFF2",
    main: "#FE5B35",
    dark: "#EDEFF2",
  },
  typography: {
    light: "#EDEFF2",
    secondary: "#5F6677",
    primary: "#1F232D",
    disabled: "#B8B8B8",
    negativeDisabled: "#707070",
    tag: "#1773FD",
    termsAndCondition: "#5E5E5E",
  },

  backgrounds: {
    white: "#FFFFFF",
    system: "#F4F5F8",
    form: "#1e6779",
    login: "#FFFCF5",
    error: "#FCF6F6",
    border: "#D6DCE6",
    addInInfo: "#FFF7E1",
  },
  hart: {
    primary: "#FDE5F4",
    hover: "#FFCAEB",
    active: "#D93098",
  },
  systemHeader: {
    main: "#131720",
    secondary: "#2E2E2E",
    light: "#707070",
  },
  search: {
    background: "#edeff2",
    border: "#1773fd",
  },
  buttons: {
    backgroundLight: "#F6F7FA",
    backgroundDisable: "#E4E4E4",
    backgroundSecondary: "#383F50",
    backgroundDark: "#1F232D",
    backgroundSystem: "#F4F5F8",
    negativeDisabled: "#282828",
    grayHover: "#E2E8F0",
    grayPressed: "#CED5DF",
    form: "#EDEFF2",
    iconButtonBackgroundFocus: "#0000000a",
  },
  divider: "#c7c7c7",
  shadow: {
    main: "-1px 1px 0px #1F232D;",
    solid: "-1px 1px 0px #CED5DF",
    drop: "rgba(52, 54, 91, 0.08)",
    avatarBadge: "0px 4px 12px rgba(31, 35, 45, 0.12)",
    tooltip:
      "0px 5px 5px rgba(0, 0, 0, 0.1), -1px 1px 0px #1F232D, 0px 10px 14px rgba(52, 54, 91, 0.14)",
    disabled: " -1px 1px 0px #B8B8B8",
    addInShadow: `-1px 1px 0px #D6DCE5, 0px 1px 0px #E0E4EB`,
  },
};

export default palette;
