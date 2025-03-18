import { PaletteColorOptions } from "@mui/material/styles";

interface TypographyPaletteColorOptions extends PaletteColorOptions {
  primary: string;
  secondary: string;
  light: string;
  tag: string;
  disabled: string;
  negativeDisabled: string;
  termsAndCondition: string;
}

interface ButtonPaletteColorOptions extends PaletteColorOptions {
  backgroundLight: string;
  backgroundDisable: string;
  backgroundSecondary: string;
  backgroundDark: string;
  backgroundSystem: string;
  negativeDisabled: string;
  grayHover: string;
  grayPressed: string;
  form: string;
  iconButtonBackgroundFocus: string;
}

interface ShadowPaletteColorOptions extends PaletteColorOptions {
  main: string;
  solid: string;
  drop: string;
  tooltip: string;
  avatarBadge: string;
  disabled: string;
  addInShadow: string;
}

interface HartPaletteColorOptions extends PaletteColorOptions {
  primary: string;
  hover: string;
  active: string;
}

interface BackgroundsPaletteColorOptions extends PaletteColorOptions {
  white: string;
  system: string;
  form: string;
  addInInfo: string;
  login: string;
  error: string;
  border: string;
}

interface SearchPaletteColorOptions extends PaletteColorOptions {
  background: string;
  border: string;
  boxShadow: string;
}

interface SystemHeaderPaletteColorOptions extends PaletteColorOptions {
  secondary: string;
  main: string;
  light: string;
}

interface PalettePrimary extends PaletteColorOptions {
  light: string;
  main: string;
  dark: string;
}

declare module "@mui/material/styles" {
  interface Palette {
    hart: HartPaletteColorOptions;
    primary: PalettePrimary;
    systemHeader: SystemHeaderPaletteColorOptions;
    typography: TypographyPaletteColorOptions;
    buttons: ButtonPaletteColorOptions;
    shadow: ShadowPaletteColorOptions;
    backgrounds: BackgroundsPaletteColorOptions;
    search: SelectPaletteColorOptions;
  }

  interface PaletteOptions {
    hart: HartPaletteColorOptions;
    primary: PalettePrimary;
    systemHeader: SystemHeaderPaletteColorOptions;
    typography: TypographyPaletteColorOptions;
    buttons: ButtonPaletteColorOptions;
    shadow: ShadowPaletteColorOptions;
    backgrounds: BackgroundsPaletteColorOptions;
    search: SelectPaletteColorOptions;
  }

  interface TypographyVariants {
    h1Bold: React.CSSProperties;
    h1SemiBold: React.CSSProperties;
    h1Medium: React.CSSProperties;
    h1Regular: React.CSSProperties;
    h1Light: React.CSSProperties;

    h2Bold: React.CSSProperties;
    h2Medium: React.CSSProperties;
    h2Regular: React.CSSProperties;

    h3Bold: React.CSSProperties;
    h3Regular: React.CSSProperties;

    paragraphBold: React.CSSProperties;
    paragraphMedium: React.CSSProperties;

    mediumBold: React.CSSProperties;
    mediumRegular: React.CSSProperties;

    regularBold: React.CSSProperties;
    regularRegular: React.CSSProperties;

    smallBold: React.CSSProperties;
    smallSemiBold: React.CSSProperties;
    smallRegular: React.CSSProperties;

    xsmallSemiBold: React.CSSProperties;
    xsmallRegular: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    h1Bold: React.CSSProperties;
    h1SemiBold: React.CSSProperties;
    h1Medium: React.CSSProperties;
    h1Regular: React.CSSProperties;
    h1Light: React.CSSProperties;

    h2Bold: React.CSSProperties;
    h2Medium: React.CSSProperties;
    h2Regular: React.CSSProperties;

    h3Bold: React.CSSProperties;
    h3Regular: React.CSSProperties;

    paragraphBold: React.CSSProperties;
    paragraphMedium: React.CSSProperties;

    mediumBold: React.CSSProperties;
    mediumRegular: React.CSSProperties;

    regularBold: React.CSSProperties;
    regularRegular: React.CSSProperties;

    smallBold: React.CSSProperties;
    smallSemiBold: React.CSSProperties;
    smallRegular: React.CSSProperties;

    xsmallSemiBold: React.CSSProperties;
    xsmallRegular: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    h1Bold: true;
    h1SemiBold: true;
    h1Medium: true;
    h1Regular: true;
    h1Light: true;

    h2Bold: true;
    h2Medium: true;
    h2Regular: true;

    h3Bold: true;
    h3Regular: true;

    paragraphBold: true;
    paragraphMedium: true;

    mediumBold: true;
    mediumRegular: true;

    regularBold: true;
    regularRegular: true;

    smallBold: true;
    smallSemiBold: true;
    smallRegular: true;

    xsmallSemiBold: true;
    xsmallRegular: true;

    h1: false;
    h2: false;
    h3: false;
    h4: false;
    h5: false;
    h6: false;
    subtitle1: false;
    subtitle2: false;
    body1: false;
    body2: false;
    button: false;
    caption: false;
    overline: false;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    primary: true;
    secondary: true;
    tertiary: true;
    outline: true;
    dark: true;
    tertiaryGray: true;
    tertiaryDark: true;
    simple: true;
    addInPrimary: true;
    addInSecondary: true;
    addInTertiary: true;
    addInTertiaryShadow: true;
    addInDark: true;
    addInTertiaryGray: true;
    addInTertiaryDark: true;
  }
}
