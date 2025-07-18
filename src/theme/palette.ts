const legacyPalette = {
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

  backgrounds: {
    white: "#FFFFFF",
    system: "#F4F5F8",
    form: "#1e6779",
    login: "#FFFCF5",
    error: "#FCF6F6",
    border: "#D6DCE6",
    addInInfo: "#FFF7E1",
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

const universalPalette = {
  white: {
    light: "#FFFFFF",
  },
  navy: {
    dark: "#293747",
  },
  black: {
    dark: "#000000",
  },
  neutral: {
    darkGrey: "#828282",
    grey2: "#CACACA",
    lightGrey: "#EEEEEE",
  },
  flat: {
    grey: "#F9F9F9",
  },
  stroke: {
    grey: "#DBDFE3",
  },
  alerts: {
    yellow: {
      alert: "#FFF4E5",
      border: "#D4CBBE",
      accent: "#EF6C00",
      dark: "#663C00",
    },
    blue: {
      alert: "#E5F6FD",
      light: "#D4EBF5",
      border: "#C1C9D8",
      accent: "#0288D1",
      dark: "#014361",
    },
    green: {
      alert: "#EDF7ED",
      light: "#DFF1D5",
      border: "#A5B5A5",
      accent: "#2E7D32",
      dark: "#1E4620",
    },
    red: {
      alert: "#FDEDED",
      light: "#F9D8D0",
      border: "#DCCDCD",
      accent: "#D32F2F",
      dark: "#5F2120",
    },
  },
};

const paletteZborAjutor = {
  ...legacyPalette,
  ...universalPalette,
  mode: "light" as const,

  primary: {
    hue: "#EFF7F1",
    main: "#149F42",
    main60: "#72C58E",
    light: "#A9DCBA",
    dark: "#0E1726",
  },
  secondary: {
    light: "#DEF9D0",
    main: "#218141",
    dark: "#115026",
  },
};

const paletteFlightHelp = {
  ...legacyPalette,
  ...universalPalette,

  mode: "light" as const,

  primary: {
    hue: "#F6FBFB",
    main: "#20ABAD",
    main60: "#6FC3C4",
    light: "#8FB2B2",
    dark: "#0F5C5D",
    hover: "#063536",
  },
  secondary: {
    light: "#F9D8D0",
    main: "#FE5B35",
    dark: "#E64722",
  },
};

console.log(paletteFlightHelp);

export default {
  legacyPalette,
  universalPalette,
  paletteZborAjutor,
  paletteFlightHelp,
};
