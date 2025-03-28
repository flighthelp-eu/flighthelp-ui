import { styled, Typography, TextField } from "@mui/material";
import theme from "../../theme";

export const Title = styled(Typography)(() => ({
  fontSize: "14px",
  fontWeight: 600,
  lineHeight: "22px",
  letterSpacing: "-0.28px",
  pb: 1,
}));

export const TextFieldStyled = styled(TextField)(() => ({
  boxSizing: "border-box",
  "& label.Mui-focused": { color: "#0F5C5D" },
  "& .MuiOutlinedInput-root": {
    lineHeight: "1.5",
    backgroundColor: "#F4FEFE",
    "& fieldset": {
      borderColor: "#6FC3C4",
      borderWidth: "1px",
      borderRadius: "8px",
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
      padding: `${theme.spacing(4)} ${theme.spacing(4)}`,
      "&::placeholder": {
        color: "#293747",
        opacity: 1,
      },
    },
  },
}));
