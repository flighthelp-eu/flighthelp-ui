import { palette } from "@/theme";
import { styled, Typography, TextField } from "@mui/material";

export const Title = styled(Typography)(() => ({
  fontWeight: 600,
  lineHeight: "1.2rem",
  letterSpacing: "-0.24px",
  position: "relative",
  display: "flex",
  color: palette.universalPalette.navy.dark,
}));

export const TextFieldStyled = styled(TextField)(({ theme }) => ({
  boxSizing: "border-box",
  "& .MuiInputLabel-root": {
    color: palette.universalPalette.navy.dark,
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#0F5C5D",
  },
  "& .MuiInputLabel-shrink": {
    color: "#0F5C5D",
  },
  "& .MuiOutlinedInput-root": {
    lineHeight: "1.2rem !important",
    backgroundColor: theme.palette.primary.hue,

    "&.MuiInputBase-multiline": {
      padding: 0,

      "& .MuiInputBase-inputMultiline": {
        padding: `12px 16px`,
      },
    },

    "& fieldset": {
      borderColor: theme.palette.primary.main60,
      borderWidth: "1px",
      borderRadius: "8px",
    },
    "&.Mui-disabled": {
      backgroundColor: "#D8DFE3",
      borderColor: "#828282",
      "& .MuiInputBase-input": {
        color: "#828282",
        WebkitTextFillColor: "#828282",
      },
    },
    "&:hover fieldset": {
      borderColor: "#0F5C5D",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#0F5C5D",
      color: "#0F5C5D",
    },
    "& .MuiOutlinedInput-input": {
      fontSize: { xs: "0.95rem !important", md: "1rem !important" },
      fontWeight: 400,
      lineHeight: "1.2rem !important",
      padding: "10px 14px",
      "&::placeholder": {
        color: palette.universalPalette.navy.dark,
        opacity: 0.7,
        fontSize: { xs: "0.95rem !important", md: "1rem !important" },
      },
    },
  },
}));
