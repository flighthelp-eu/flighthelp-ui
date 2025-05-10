import { TypographyOptions } from "@mui/material/styles/createTypography";
import breakpoints from "./breakpoints";

export const fontFamily = '"Lexend deca", sans-serif';

const typography: TypographyOptions = {
  allVariants: {
    fontFamily,
  },

  fontFamily,
  fontSize: 14,

  h1: {
    fontFamily,
    fontWeight: 700, // Bold
    fontSize: "28px",
    lineHeight: "36px",
    [`@media screen and (min-width: ${breakpoints?.values?.sm}px)`]: {
      fontSize: "28px",
      lineHeight: "36px",
    },
    [`@media screen and (min-width: ${breakpoints?.values?.md}px)`]: {
      fontSize: "40px",
      lineHeight: "46px",
    },
    [`@media screen and (min-width: ${breakpoints?.values?.lg}px)`]: {
      fontSize: "40px",
      lineHeight: "46px",
    },
    [`@media screen and (min-width: ${breakpoints?.values?.xl}px)`]: {
      fontSize: "48px",
      lineHeight: "56px",
    },
  },

  h2: {
    fontFamily,
    fontWeight: 700, // Bold
    fontSize: "26px",
    lineHeight: "32px",

    [`@media screen and (min-width: ${breakpoints?.values?.sm}px)`]: {
      fontSize: "35px",
      lineHeight: "38px",
    },
    [`@media screen and (min-width: ${breakpoints?.values?.md}px)`]: {
      fontSize: "35px",
      lineHeight: "38px",
    },
    [`@media screen and (min-width: ${breakpoints?.values?.lg}px)`]: {
      fontSize: "40px",
      lineHeight: "44px",
    },
    [`@media screen and (min-width: ${breakpoints?.values?.xl}px)`]: {
      fontSize: "40px",
      lineHeight: "44px",
    },
  },

  h3: {
    fontFamily,
    fontWeight: 700, // Bold
    fontSize: "24px",
    lineHeight: "30px",

    [`@media screen and (min-width: ${breakpoints?.values?.sm}px)`]: {
      fontSize: "24px",
      lineHeight: "30px",
    },
    [`@media screen and (min-width: ${breakpoints?.values?.md}px)`]: {
      fontSize: "32px",
      lineHeight: "26px",
    },
    [`@media screen and (min-width: ${breakpoints?.values?.lg}px)`]: {
      fontSize: "36px",
      lineHeight: "44px",
    },
    [`@media screen and (min-width: ${breakpoints?.values?.xl}px)`]: {
      fontSize: "36px",
      lineHeight: "44px",
    },
  },

  h4: {
    fontFamily,
    fontWeight: 700, // Bold
    fontSize: "22px",
    lineHeight: "26px",

    [`@media screen and (min-width: ${breakpoints?.values?.sm}px)`]: {
      fontSize: "22px",
      lineHeight: "26px",
    },
    [`@media screen and (min-width: ${breakpoints?.values?.md}px)`]: {
      fontSize: "26px",
      lineHeight: "30px",
    },
    [`@media screen and (min-width: ${breakpoints?.values?.lg}px)`]: {
      fontSize: "28px",
      lineHeight: "26px",
    },
    [`@media screen and (min-width: ${breakpoints?.values?.xl}px)`]: {
      fontSize: "28px",
      lineHeight: "26px",
    },
  },

  h5: {
    fontFamily,
    fontWeight: 600, // SemiBold
    fontSize: "20px",
    lineHeight: "26px",

    [`@media screen and (min-width: ${breakpoints?.values?.sm}px)`]: {
      fontSize: "20px",
      lineHeight: "26px",
    },
    [`@media screen and (min-width: ${breakpoints?.values?.md}px)`]: {
      fontSize: "22px",
      lineHeight: "28px",
    },
    [`@media screen and (min-width: ${breakpoints?.values?.lg}px)`]: {
      fontSize: "22px",
      lineHeight: "28px",
    },
    [`@media screen and (min-width: ${breakpoints?.values?.xl}px)`]: {
      fontSize: "24px",
      lineHeight: "29px",
    },
  },

  h6: {
    fontFamily,
    fontWeight: 700, // Bold
    fontSize: "18px",
    lineHeight: "26px",
    [`@media screen and (min-width: ${breakpoints?.values?.sm}px) and (max-width: ${breakpoints?.values?.md}px)`]:
      {
        fontSize: "18px",
        lineHeight: "26px",
      },
    [`@media screen and (min-width: ${breakpoints?.values?.md}px)`]: {
      fontSize: "20px",
      lineHeight: "26px",
    },
  },

  allCaps: {
    fontFamily,
    fontWeight: 700, // Bold
    textTransform: "uppercase",
    fontSize: "12px",
    lineHeight: "18px",
    letterSpacing: "4px",

    [`@media screen and (min-width: ${breakpoints?.values?.sm}px)`]: {
      fontSize: "12px",
      lineHeight: "18px",
    },
    [`@media screen and (min-width: ${breakpoints?.values?.md}px)`]: {
      fontSize: "15px",
      lineHeight: "20px",
    },
    [`@media screen and (min-width: ${breakpoints?.values?.lg}px)`]: {
      fontSize: "15px",
      lineHeight: "20px",
    },
    [`@media screen and (min-width: ${breakpoints?.values?.xl}px)`]: {
      fontSize: "17px",
      lineHeight: "23px",
    },
  },

  // Bold.18
  bold18: {
    fontFamily,
    fontWeight: 700, // Bold
    fontSize: "18px",
    lineHeight: "24px",
  },

  // Regular.18
  regular18: {
    fontFamily,
    fontWeight: 400, // Regular
    fontSize: "18px",
    lineHeight: "24px",
  },

  // Bold.16
  bold16: {
    fontFamily,
    fontWeight: 700, // Bold
    fontSize: "16px",
    lineHeight: "26px",
  },

  // Regular.16
  regular16: {
    fontFamily,
    fontWeight: 400, // Regular
    fontSize: "16px",
    lineHeight: "26px",
  },

  // Bold.14
  bold14: {
    fontFamily,
    fontWeight: 700, // Bold
    fontSize: "14px",
    lineHeight: "20px",
  },

  // Regular.14
  regular14: {
    fontFamily,
    fontWeight: 400, // Regular
    fontSize: "14px",
    lineHeight: "20px",
  },

  // Bold.12 (SemiBold)
  bold12: {
    fontFamily,
    fontWeight: 600, // SemiBold
    fontSize: "12px",
    lineHeight: "16px",
  },

  // Regular.12
  regular12: {
    fontFamily,
    fontWeight: 400, // Regular
    fontSize: "12px",
    lineHeight: "16px",
  },

  // Bold.10
  bold10: {
    fontFamily,
    fontWeight: 700, // Bold
    fontSize: "10px",
    lineHeight: "14px",
  },

  // Regular.10
  regular10: {
    fontFamily,
    fontWeight: 400, // Regular
    fontSize: "10px",
    lineHeight: "14px",
  },

  // Normal Link
  normalLink: {
    fontFamily,
    fontWeight: 400, // Regular
    fontSize: "12px",
    lineHeight: "16px",
    textDecoration: "underline",
  },

  // Button Link
  buttonLink: {
    fontFamily,
    fontWeight: 600, // SemiBold
    fontSize: "12px",
    lineHeight: "16px",
    textTransform: "capitalize", // Title Case
  },

  h1Light: {},
  h1Regular: {},
  regularBold: {
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "16px",
  },
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
  smallRegular: {
    fontFamily,
    fontSize: "12px",
    fontWeight: "400",
    lineHeight: "16px",
  },
  paragraphBold: {
    fontFamily,
    fontSize: "16px",
    fontWeight: "700",
    lineHeight: "30px",
  },
  paragraphMedium: {
    fontFamily,
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "30px",
  },

  // Otras variantes estándar
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
