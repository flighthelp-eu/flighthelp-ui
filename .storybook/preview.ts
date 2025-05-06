import type { Preview } from "@storybook/react";

const customViewports = {
  xs: {
    name: "xs (0px)",
    styles: {
      width: "320px",
      height: "600px",
    },
  },
  sm: {
    name: "sm (321px)",
    styles: {
      width: "510px",
      height: "600px",
    },
  },
  md: {
    name: "md (768px)",
    styles: {
      width: "800px",
      height: "800px",
    },
  },
  lg: {
    name: "lg (1025px)",
    styles: {
      width: "1200px",
      height: "800px",
    },
  },
  xl: {
    name: "xl (1420px)",
    styles: {
      width: "1500px",
      height: "800px",
    },
  },
};

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: customViewports,
      defaultViewport: "md",
    },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
