import theme from "@/theme";
import { Box, ThemeProvider, Typography } from "@mui/material";
import { Meta, StoryObj } from "@storybook/react/*";

export const ResponsiveTypography: StoryObj = {
  parameters: {
    viewport: {
      defaultViewport: "xs", // Empieza con el viewport más pequeño
    },
  },
  render: () => (
    <>
      <Typography variant="h1" sx={{ mb: 4 }}>
        Responsive Typography
      </Typography>

      <Box sx={{ mb: 4 }}>
        <Typography variant="body1">
          Usa los controles de viewport de Storybook para probar diferentes
          tamaños de pantalla:
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
          xs: 0px | sm: 321px | md: 768px | lg: 1025px | xl: 1420px
        </Typography>
      </Box>

      {/* Indicador de breakpoint */}
      <Box
        sx={{
          p: 2,
          mb: 4,
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 1,
          bgcolor: {
            xs: "#ffebee", // Rojo claro
            sm: "#fff8e1", // Amarillo claro
            md: "#e1f5fe", // Azul claro
            lg: "#e8f5e9", // Verde claro
            xl: "#f3e5f5", // Púrpura claro
          },
        }}
      >
        <Typography variant="h4" sx={{ mb: 2 }}>
          Breakpoint Actual:
        </Typography>
        <Typography
          variant="h2"
          sx={{
            color: {
              xs: "error.main",
              sm: "warning.main",
              md: "info.main",
              lg: "success.main",
              xl: "secondary.main",
            },
          }}
        >
          <Box component="span" sx={{ display: { xs: "block", sm: "none" } }}>
            Extra Small (xs)
          </Box>
          <Box
            component="span"
            sx={{ display: { xs: "none", sm: "block", md: "none" } }}
          >
            Small (sm)
          </Box>
          <Box
            component="span"
            sx={{ display: { xs: "none", md: "block", lg: "none" } }}
          >
            Medium (md)
          </Box>
          <Box
            component="span"
            sx={{ display: { xs: "none", lg: "block", xl: "none" } }}
          >
            Large (lg)
          </Box>
          <Box component="span" sx={{ display: { xs: "none", xl: "block" } }}>
            Extra Large (xl)
          </Box>
        </Typography>
      </Box>
    </>
  ),
};

const meta: Meta = {
  title: "Theme/Responsive Typography",
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Box sx={{ p: 3 }}>
          <Story />
        </Box>
      </ThemeProvider>
    ),
  ],
};

export default meta;
