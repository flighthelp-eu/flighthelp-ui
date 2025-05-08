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
          padding: "8px 22px",
        },
        sizeLarge: {
          padding: "19px 22px",
        },
        sizeSmall:
        {
          padding: "4px 16px 6px 16px"
        }
      },
     
      variants: [
        {
          props: { variant: "primaryBlue" },
          style: {
            backgroundColor: theme.palette.flightHelp?.primaryDark,
            color: theme.palette.common.white,
            "&:hover": {
              backgroundColor:theme.palette.flightHelp?.primaryDark2,
              color: theme.palette.common.white,
            },
            "&:focus": {
              backgroundColor: theme.palette.flightHelp?.primaryDark2,
              border: `3px solid ${theme.palette.flightHelp?.primaryMain}`
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
            backgroundColor: theme.palette.flightHelp?.secondaryMain,
            color: theme.palette.common.white,
            borderColor: theme.palette.flightHelp?.secondaryMain,
            "&:hover": {
              backgroundColor: theme.palette.flightHelp?.secondaryDark,
            },
            "&:focus": {
              backgroundColor: theme.palette.flightHelp?.secondaryMain,
             border: `3px solid ${ theme.palette.flightHelp?.secondaryDark}`
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
            color: theme.palette.flightHelp?.secondaryMain,
            border: `1px solid ${theme.palette.flightHelp?.secondaryMain}`,
            "&:hover": {
              backgroundColor: theme.palette.flightHelp?.secondaryLight,
            },
            "&:focus": {
              borderColor: theme.palette.secondary.dark,
              border: `3px solid ${theme.palette.flightHelp?.secondaryMain}`,
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
            color: theme.palette.flightHelp?.primaryDark,
            border: `1px solid ${theme.palette.flightHelp?.primaryDark}`,
            "&:hover": {
              backgroundColor:theme.palette.flightHelp?.primaryDark2,
              color: theme.palette.common.white,
            },
            "&:focus": {
              backgroundColor: theme.palette.flightHelp?.primaryDark2,
              border: `3px solid ${theme.palette.flightHelp?.primaryMain}`
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
            backgroundColor: theme.palette.flightHelp?.primaryMain,
            color: theme.palette.common.white,
            "&:hover": {
              backgroundColor:theme.palette.flightHelp?.primaryDark2,
              color: theme.palette.common.white,
            },
            "&:focus": {
              backgroundColor: theme.palette.flightHelp?.primaryDark2,
              border: `3px solid ${theme.palette.flightHelp?.primaryMain}`
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