import { styled, Typography, TextField } from "@mui/material";

export const Title = styled(Typography)(() => ({
  fontSize: "14px",
  fontWeight: 600,
  lineHeight: "22px",
  letterSpacing: "-0.28px",
  pb: 1,
  position: "relative",
  display: "flex",
}));

export const TextFieldStyled = styled(TextField)(({ theme }) => ({
  boxSizing: "border-box",
  "& label.Mui-focused": { color: "#0F5C5D" },
  "& .MuiOutlinedInput-root": {
    lineHeight: "1.5",
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
      fontSize: "14px",
      fontWeight: 400,
      padding: "16px",
      "&::placeholder": {
        color: "#293747",
        opacity: 1,
      },
    },
  },
}));
