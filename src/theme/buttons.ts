import { Theme } from "@mui/material/styles";

export default function buttons(theme: Theme) {
  return {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        // Estilos globales para todos los botones si los necesitas
        root: {
          textTransform: "none",
          borderRadius: 8,
        },
      },
      variants: [
        {
          props: { variant: "primary" as any },
          style: {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white,
            padding: "10px 24px",
            "&:hover": {
              backgroundColor: theme.palette.primary.dark,
            },
            "&.Mui-disabled": {
              backgroundColor: "#D8DFE3",
              color: "#828282",
            },
          },
        },
        {
          props: { variant: "secondary" as any },
          style: {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.common.white,
            padding: "10px 24px",
            "&:hover": {
              backgroundColor: theme.palette.secondary.dark,
            },
            "&.Mui-disabled": {
              backgroundColor: "#D8DFE3",
              color: "#828282",
            },
          },
        },
        {
          props: { variant: "outline" as any },
          style: {
            backgroundColor: "transparent",
            color: theme.palette.primary.main,
            padding: "9px 23px",
            border: `1px solid ${theme.palette.primary.main}`,
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.04)",
            },
            "&.Mui-disabled": {
              borderColor: "#828282",
              color: "#828282",
            },
          },
        },
      ],
    },
  };
}
