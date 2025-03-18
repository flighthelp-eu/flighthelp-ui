import { TypographyOptions } from "@mui/material/styles/createTypography";
import breakpoints from "./breakpoints";

export const fontFamily = '"Lexend deca", sans-serif';

const typography: TypographyOptions = {
  allVariants: {
    fontFamily,
  },

  fontFamily,
  fontSize: 14,
  // Used in homepage
  h1Light: {},
  h1Regular: {},
  regularBold: {},
  regularRegular: {},
  smallBold: {},
  smallSemiBold: {},
  xsmallRegular: {},
  xsmallSemiBold: {},
  h1Bold: {
    fontFamily,
    fontSize: "48px",
    lineHeight: "56px",
    [`@media screen and (max-width: ${breakpoints?.values?.md}px)`]: {
      fontSize: "32px",
      lineHeight: "40px",
    },
    fontWeight: "700",
  },
  h1SemiBold: {
    fontFamily,
    fontSize: "48px",
    lineHeight: "60px",
    [`@media screen and (max-width: ${breakpoints?.values?.md}px)`]: {
      fontSize: "32px",
      lineHeight: "40px",
    },
    fontWeight: "600",
  },
  h1Medium: {
    fontFamily,
    fontSize: "48px",
    fontWeight: "500",
    lineHeight: "60px",
  },
  // Used in homepage
  h2Bold: {
    fontFamily,
    fontSize: "40px",
    lineHeight: "60px",
    [`@media screen and (max-width: ${breakpoints?.values?.md}px)`]: {
      fontSize: "24px",
      lineHeight: "30px",
    },
    fontWeight: "700",
  },
  h2Medium: {
    fontFamily,
    fontSize: "40px",
    fontWeight: "500",
    lineHeight: "60px",
  },
  h2Regular: {
    fontFamily,
    fontSize: "40px",
    fontWeight: "400",
    lineHeight: "60px",
  },
  // Used in homepage
  h3Bold: {
    fontFamily,
    fontSize: "28px",
    [`@media screen and (max-width: ${breakpoints?.values?.md}px)`]: {
      fontSize: "24px",
    },
    fontWeight: "600",
    lineHeight: "40px",
  },
  h3Regular: {
    fontFamily,
    fontSize: "32px",
    [`@media screen and (max-width: ${breakpoints?.values?.md}px)`]: {
      fontSize: "24px",
    },
    fontWeight: "400",
    lineHeight: "40px",
  },
  mediumBold: {
    fontFamily,
    fontSize: "14px",
    fontWeight: "600",
    lineHeight: "16px",
  },

  mediumRegular: {
    fontFamily,
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "150%",
  },

  // Used in file a claim
  smallRegular: {
    fontFamily,
    fontSize: "12px",
    fontWeight: "400",
    lineHeight: "16px",
  },
  // Used in FormAppbar
  paragraphBold: {
    fontFamily,
    fontSize: "16px",
    fontWeight: "700",
    lineHeight: "30px",
  },
  // Used in homepage
  paragraphMedium: {
    fontFamily,
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "30px",
  },

  h1: undefined,
  h2: undefined,
  h3: undefined,
  h4: undefined,
  h5: undefined,
  h6: undefined,
  subtitle1: undefined,
  subtitle2: undefined,
  body1: {
    fontFamily,
  },
  body2: undefined,
  button: {
    fontFamily,
    fontSize: "16px",
    fontWeight: "600",
    lineHeight: "20px",
  },
  caption: {
    fontFamily,
    fontSize: "14px",
    fontWeight: "400",
  },
  overline: undefined,
};

export default typography;
