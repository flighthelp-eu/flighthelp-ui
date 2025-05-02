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
    allCaps: React.CSSProperties;
    bold18: React.CSSProperties;
    regular18: React.CSSProperties;
    bold16: React.CSSProperties;
    regular16: React.CSSProperties;
    bold14: React.CSSProperties;
    regular14: React.CSSProperties;
    bold12: React.CSSProperties;
    regular12: React.CSSProperties;
    bold10: React.CSSProperties;
    regular10: React.CSSProperties;
    normalLink: React.CSSProperties;
    buttonLink: React.CSSProperties;
    // Mantener tus variantes personalizadas existentes
    h1Light: React.CSSProperties;
    h1Regular: React.CSSProperties;
    h1Bold: React.CSSProperties;
    h1SemiBold: React.CSSProperties;
    h1Medium: React.CSSProperties;
    h2Bold: React.CSSProperties;
    h2Medium: React.CSSProperties;
    h2Regular: React.CSSProperties;
    h3Bold: React.CSSProperties;
    h3Regular: React.CSSProperties;
    regularBold: React.CSSProperties;
    regularRegular: React.CSSProperties;
    smallBold: React.CSSProperties;
    smallSemiBold: React.CSSProperties;
    xsmallRegular: React.CSSProperties;
    xsmallSemiBold: React.CSSProperties;
    mediumBold: React.CSSProperties;
    mediumRegular: React.CSSProperties;
    smallRegular: React.CSSProperties;
    paragraphBold: React.CSSProperties;
    paragraphMedium: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    allCaps?: React.CSSProperties;
    bold18?: React.CSSProperties;
    regular18?: React.CSSProperties;
    bold16?: React.CSSProperties;
    regular16?: React.CSSProperties;
    bold14?: React.CSSProperties;
    regular14?: React.CSSProperties;
    bold12?: React.CSSProperties;
    regular12?: React.CSSProperties;
    bold10?: React.CSSProperties;
    regular10?: React.CSSProperties;
    normalLink?: React.CSSProperties;
    buttonLink?: React.CSSProperties;
    h1Light?: React.CSSProperties;
    h1Regular?: React.CSSProperties;
    h1Bold?: React.CSSProperties;
    h1SemiBold?: React.CSSProperties;
    h1Medium?: React.CSSProperties;
    h2Bold?: React.CSSProperties;
    h2Medium?: React.CSSProperties;
    h2Regular?: React.CSSProperties;
    h3Bold?: React.CSSProperties;
    h3Regular?: React.CSSProperties;
    regularBold?: React.CSSProperties;
    regularRegular?: React.CSSProperties;
    smallBold?: React.CSSProperties;
    smallSemiBold?: React.CSSProperties;
    xsmallRegular?: React.CSSProperties;
    xsmallSemiBold?: React.CSSProperties;
    mediumBold?: React.CSSProperties;
    mediumRegular?: React.CSSProperties;
    smallRegular?: React.CSSProperties;
    paragraphBold?: React.CSSProperties;
    paragraphMedium?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    allCaps: true;
    bold18: true;
    regular18: true;
    bold16: true;
    regular16: true;
    bold14: true;
    regular14: true;
    bold12: true;
    regular12: true;
    bold10: true;
    regular10: true;
    normalLink: true;
    buttonLink: true;
    h1Light: true;
    h1Regular: true;
    h1Bold: true;
    h1SemiBold: true;
    h1Medium: true;
    h2Bold: true;
    h2Medium: true;
    h2Regular: true;
    h3Bold: true;
    h3Regular: true;
    regularBold: true;
    regularRegular: true;
    smallBold: true;
    smallSemiBold: true;
    xsmallRegular: true;
    xsmallSemiBold: true;
    mediumBold: true;
    mediumRegular: true;
    smallRegular: true;
    paragraphBold: true;
    paragraphMedium: true;
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
