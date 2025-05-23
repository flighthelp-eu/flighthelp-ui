import { Theme } from "@mui/material";

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
          padding: "8px 22px",
        },
        sizeLarge: {
          padding: "19px 22px",
        },
        sizeSmall: {
          padding: "4px 16px 6px 16px",
        },
      },

      variants: [
        {
          props: { variant: "primaryBlue" },
          style: {
            backgroundColor: theme.palette?.primary?.dark,
            color: theme.palette.common.white,
            "&:hover": {
              backgroundColor: theme.palette?.primary?.hover,
              color: theme.palette.common.white,
            },
            "&:focus": {
              backgroundColor: theme.palette?.primary?.hover,
              border: `3px solid ${theme.palette?.primary?.main}`,
            },
            "&.Mui-disabled": {
              backgroundColor: "#D8DFE3",
              color: "#828282",
              borderColor: "#828282",
            },
          },
        },
        {
          props: { variant: "secondaryOrange" },
          style: {
            backgroundColor: theme.palette?.secondary?.main,
            color: theme.palette.common.white,
            borderColor: theme.palette?.secondary?.main,
            "&:hover": {
              backgroundColor: theme.palette?.secondary?.dark,
            },
            "&:focus": {
              backgroundColor: theme.palette?.secondary?.main,
              border: `3px solid ${theme.palette?.secondary?.dark}`,
            },
            "&.Mui-disabled": {
              backgroundColor: "#D8DFE3",
              color: "#828282",
              borderColor: "#828282",
            },
          },
        },
        {
          props: { variant: "secondaryOutlined" },
          style: {
            backgroundColor: theme.palette.common.white,
            color: theme.palette?.secondary?.main,
            border: `1px solid ${theme.palette?.secondary?.dark}`,
            "&:hover": {
              backgroundColor: theme.palette?.secondary?.light,
            },
            "&:focus": {
              borderColor: theme.palette.secondary.dark,
              border: `3px solid ${theme.palette?.secondary?.main}`,
            },
            "&.Mui-disabled": {
              backgroundColor: "#D8DFE3",
              color: "#828282",
              borderColor: "#828282",
            },
          },
        },

        {
          props: { variant: "primaryOutline" },
          style: {
            backgroundColor: theme.palette.common.white,
            color: theme.palette?.primary?.dark,
            border: `1px solid ${theme.palette?.primary?.dark}`,
            "&:hover": {
              backgroundColor: "#E64722",
              color: theme.palette.common.white,
            },
            "&:focus": {
              backgroundColor: theme.palette?.secondary.main,
              border: `3px solid ${theme.palette?.primary?.main}`,
            },
            "&.Mui-disabled": {
              backgroundColor: "#D8DFE3",
              color: "#828282",
              borderColor: "#828282",
            },
          },
        },
        {
          props: { variant: "transparent" },
          style: {
            color: theme.palette.common.white,
            border: `1px solid ${theme.palette.common.white}`,
            "&:hover": {
              opacity: 0.82,
            },
            "&:focus": {
              border: `2px solid ${theme.palette.common.white}`,
            },
            "&.Mui-disabled": {
              backgroundColor: "#D8DFE3",
              color: "#828282",
              borderColor: "#828282",
            },
          },
        },
        {
          props: { variant: "primaryMain" },
          style: {
            backgroundColor: theme.palette?.primary?.main,
            color: theme.palette.common.white,
            "&:hover": {
              backgroundColor: theme.palette?.primary?.dark,
              color: theme.palette.common.white,
            },
            "&:focus": {
              backgroundColor: theme.palette?.primary?.hover,
              border: `3px solid ${theme.palette?.primary?.main}`,
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
