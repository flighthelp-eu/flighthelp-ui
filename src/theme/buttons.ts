import { Theme } from "@mui/material/styles";

export default function buttons(theme: Theme) {
  return {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "20px",
        },
        sizeMedium: {
          color: "red",
          padding: "8px 16px",
        },
        sizeLarge: {
          padding: "19px 22px",
        },
      },
      variants: [
        {
          props: { variant: "primary" },
          style: {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white,
            padding: "8px 22px",
            "&:hover": {
              backgroundColor: theme.palette.primary.dark,
              color: theme.palette.common.white,
            },
          },
        },
        {
          props: { variant: "btn-lg-secondary-main-filled" },
          style: {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.common.white,
            borderColor: theme.palette.secondary.main,
            padding: "8px 22px",
            "&:hover": {
              backgroundColor: theme.palette.secondary.dark,
            },
            "&:Mui-focused": {
              backgroundColor: theme.palette.secondary.main,
              borderColor: theme.palette.secondary.dark,
              borderWidth: "3px",
            },
            "&.Mui-disabled": {
              backgroundColor: "#D8DFE3",
              color: "#828282",
              borderColor: "#828282",
            },
          },
        },
        {
          props: { variant: "btn-lg-secondary-outlined" },
          style: {
            backgroundColor: theme.palette.common.white,
            color: theme.palette.secondary.main,
            padding: "8px 22px",
            borderColor: theme.palette.secondary.main,
            "&:hover": {
              backgroundColor: theme.palette.secondary.light,
            },
            "&:Mui-focused": {
              color: theme.palette.secondary.dark,
              borderColor: theme.palette.secondary.dark,
              borderWidth: "3px",
            },
            "&.Mui-disabled": {
              backgroundColor: "#D8DFE3",
              color: "#828282",
              borderColor: "#828282",
            },
          },
        },
        {
          props: { variant: "btn-lg-secondary-dropdown" },
          style: {
            //añadir icono
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.common.white,
            borderColor: theme.palette.secondary.main,
            padding: "8px 22px",
            "&:hover": {
              backgroundColor: theme.palette.secondary.dark,
            },
            "&:Mui-focused": {
              backgroundColor: theme.palette.secondary.main,
              borderColor: theme.palette.secondary.dark,
              borderWidth: "3px",
            },
            "&.Mui-disabled": {
              backgroundColor: "#D8DFE3",
              color: "#828282",
              borderColor: "#828282",
            },
          },
        },
        {
          props: { variant: "btn-sm-secondary-main-filled" },
          style: {
            backgroundColor: theme.palette.secondary.main,
            borderColor: theme.palette.secondary.main,
            color: theme.palette.common.white,
            padding: "4px 16px 6px 16px",
            "&:hover": {
              backgroundColor: theme.palette.secondary.dark,
            },
            "&:Mui-focused": {
              backgroundColor: theme.palette.secondary.main,
              borderColor: theme.palette.secondary.dark,
              borderWidth: "3px",
            },
            "&.Mui-disabled": {
              backgroundColor: "#D8DFE3",
              color: "#828282",
              borderColor: "#828282",
            },
          },
        },
        {
          props: { variant: "btn-sm-secondary-outlined" },
          style: {
            backgroundColor: theme.palette.common.white,
            color: theme.palette.secondary.main,
            padding: "4px 16px 6px 16px",
            borderColor: theme.palette.secondary.main,
            "&:hover": {
              backgroundColor: theme.palette.secondary.light,
            },
            "&:Mui-focused": {
              color: theme.palette.secondary.dark,
              borderColor: theme.palette.secondary.dark,
              borderWidth: "3px",
            },
            "&.Mui-disabled": {
              backgroundColor: "#D8DFE3",
              color: "#828282",
              borderColor: "#828282",
            },
          },
        },
        {
          props: { variant: "btn-lg-primary-dark-filled" },
          style: {
            backgroundColor: theme.palette.primary.dark,
            color: theme.palette.common.white,
            borderColor: theme.palette.primary.dark,
            padding: "8px 22px",
            "&:hover": {
              backgroundColor: "#063536",
              borderColor: "#063536",
            },
            "&:Mui-focused": {
              backgroundColor: theme.palette.primary.dark,
              borderColor: theme.palette.primary.main,
              borderWidth: "3px",
            },
            "&.Mui-disabled": {
              backgroundColor: "#D8DFE3",
              color: "#828282",
              borderColor: "#828282",
            },
          },
        },
        {
          props: { variant: "btn-lg-primary-outline" },
          style: {
            color: theme.palette.primary.dark,
            borderColor: theme.palette.primary.dark,
            padding: "8px 22px",
            "&:hover": {
              backgroundColor: "#063536",
              borderColor: "#063536",
              color: theme.palette.common.white,
            },
            "&:Mui-focused": {
              backgroundColor: theme.palette.primary.dark,
              borderColor: theme.palette.primary.main,
              borderWidth: "3px",
            },
            "&.Mui-disabled": {
              backgroundColor: "#D8DFE3",
              color: "#828282",
              borderColor: "#828282",
            },
          },
        },
        {
          props: { variant: "btn-lg-transparent-outline" },
          style: {
            color: theme.palette.common.white,
            borderColor: theme.palette.common.white,
            padding: "8px 22px",
            "&:hover": {
              opacity: "18%",
            },
            "&:Mui-focused": {
              borderWidth: "2px",
            },
            "&.Mui-disabled": {
              backgroundColor: "#D8DFE3",
              color: "#828282",
              borderColor: "#828282",
            },
          },
        },
        {
          props: { variant: "btn-lg-primary-main-filled" },
          style: {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white,
            borderColor: theme.palette.primary.main,
            padding: "8px 22px",
            "&:hover": {
              backgroundColor: "#063536",
              borderColor: "#063536",
            },
            "&:Mui-focused": {
              backgroundColor: theme.palette.primary.dark,
              borderColor: theme.palette.primary.main,
              borderWidth: "3px",
            },
            "&.Mui-disabled": {
              backgroundColor: "#D8DFE3",
              color: "#828282",
              borderColor: "#828282",
            },
          },
        },
        {
          props: { variant: "btn-sm-primary-dark-filled" },
          style: {
            backgroundColor: theme.palette.primary.dark,
            color: theme.palette.common.white,
            borderColor: theme.palette.primary.dark,
            padding: "4px 16px 6px 16px",
            "&:hover": {
              backgroundColor: "#063536",
              borderColor: "#063536",
            },
            "&:Mui-focused": {
              backgroundColor: theme.palette.primary.dark,
              borderColor: theme.palette.primary.main,
              borderWidth: "2px",
            },
            "&.Mui-disabled": {
              backgroundColor: "#D8DFE3",
              color: "#828282",
              borderColor: "#828282",
            },
          },
        },
        {
          props: { variant: "btn-sm-primary-outline" },
          style: {
            color: theme.palette.primary.dark,
            borderColor: theme.palette.primary.dark,
            padding: "4px 16px 6px 16px",
            "&:hover": {
              backgroundColor: theme.palette.common.white,
              borderColor: theme.palette.primary.dark,
            },
            "&:Mui-focused": {
              borderColor: theme.palette.primary.dark,
              borderWidth: "2px",
            },
            "&.Mui-disabled": {
              backgroundColor: "#D8DFE3",
              color: "#828282",
              borderColor: "#828282",
            },
          },
        },
      ],
    },
  };
}
