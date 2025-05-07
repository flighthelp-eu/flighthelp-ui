import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { ThemeProvider } from "@emotion/react";
import theme from "@/theme";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Botón Primario",
    size: "large",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Botón Secundario",
  },
};

export const System: Story = {
  args: {
    variant: "system",
    children: "Botón de Sistema",
  },
};

export const Text: Story = {
  args: {
    variant: "text",
    children: "Botón de Texto",
  },
};

// Botones secundarios grandes - Fila superior naranja/coral
export const SecondaryMainFilledLarge: Story = {
  args: {
    variant: "btn-lg-secondary-main-filled",
    children: "Action",
  },
};

export const SecondaryOutlinedLarge: Story = {
  args: {
    variant: "btn-lg-secondary-outlined",
    children: "Action",
  },
};

export const SecondaryDropdownLarge: Story = {
  args: {
    variant: "btn-lg-secondary-dropdown",
    children: "Options",
    hasDropdownIcon: true,
  },
};

// Botones secundarios pequeños - Fila inferior naranja/coral
export const SecondaryMainFilledSmall: Story = {
  args: {
    variant: "btn-sm-secondary-main-filled",
    children: "Action",
  },
};

export const SecondaryOutlinedSmall: Story = {
  args: {
    variant: "btn-sm-secondary-outlined",
    children: "Action",
  },
};

// Botones primarios grandes - Fila superior verde/teal
export const PrimaryDarkFilledLarge: Story = {
  args: {
    variant: "btn-lg-primary-dark-filled",
    children: "Action",
  },
};

export const PrimaryOutlineLarge: Story = {
  args: {
    variant: "btn-lg-primary-outline",
    children: "Action",
  },
};

export const TransparentOutlineLarge: Story = {
  args: {
    variant: "btn-lg-transparent-outline",
    children: "Action",
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export const PrimaryMainFilledLarge: Story = {
  args: {
    variant: "btn-lg-primary-main-filled",
    children: "Action",
  },
};

// Botones primarios pequeños
export const PrimaryDarkFilledSmall: Story = {
  args: {
    variant: "btn-sm-primary-dark-filled",
    children: "Action",
  },
};

export const PrimaryOutlineSmall: Story = {
  args: {
    variant: "btn-sm-primary-outline",
    children: "Action",
  },
};

// Estados de botones
export const DisabledPrimaryButton: Story = {
  args: {
    variant: "btn-lg-primary-dark-filled",
    children: "Action",
    disabled: true,
  },
};

export const DisabledSecondaryButton: Story = {
  args: {
    variant: "btn-lg-secondary-main-filled",
    children: "Action",
    disabled: true,
  },
};

export const DisabledDropdownButton: Story = {
  args: {
    variant: "btn-lg-secondary-dropdown",
    children: "Options",
    hasDropdownIcon: true,
    disabled: true,
  },
};

// Grupos de botones que muestran las variantes como en el diseño Figma
export const SecondaryButtonsGroup: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, auto)",
        gap: "16px",
        background: "#f5f5f5",
        padding: "16px",
      }}
    >
      <Button variant="btn-lg-secondary-main-filled">Action</Button>
      <Button variant="btn-lg-secondary-outlined">Action</Button>
      <Button variant="btn-lg-secondary-dropdown" hasDropdownIcon={true}>
        Options
      </Button>

      <Button variant="btn-lg-secondary-main-filled">Action</Button>
      <Button variant="btn-lg-secondary-outlined">Action</Button>
      <Button variant="btn-lg-secondary-dropdown" hasDropdownIcon={true}>
        Options
      </Button>

      <Button variant="btn-lg-secondary-main-filled">Action</Button>
      <Button variant="btn-lg-secondary-outlined">Action</Button>
      <Button variant="btn-lg-secondary-dropdown" hasDropdownIcon={true}>
        Options
      </Button>

      <Button variant="btn-lg-secondary-main-filled" disabled>
        Action
      </Button>
      <Button variant="btn-lg-secondary-outlined" disabled>
        Action
      </Button>
      <Button
        variant="btn-lg-secondary-dropdown"
        hasDropdownIcon={true}
        disabled
      >
        Options
      </Button>
    </div>
  ),
};

export const PrimaryButtonsGroup: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, auto)",
        gap: "16px",
        background: "#f5f5f5",
        padding: "16px",
      }}
    >
      <Button variant="btn-lg-primary-dark-filled">Action</Button>
      <Button variant="btn-lg-primary-outline">Action</Button>
      <Button variant="btn-lg-transparent-outline">Action</Button>
      <Button variant="btn-lg-primary-main-filled">Action</Button>

      <Button variant="btn-lg-primary-dark-filled">Action</Button>
      <Button variant="btn-lg-primary-dark-filled">Action</Button>
      <Button variant="btn-lg-transparent-outline">Action</Button>
      <Button variant="btn-sm-primary-dark-filled">Action</Button>

      <Button variant="btn-lg-primary-main-filled">Action</Button>
      <Button variant="btn-lg-primary-dark-filled">Action</Button>
      <Button variant="btn-lg-transparent-outline">Action</Button>
      <Button variant="btn-lg-primary-main-filled">Action</Button>

      <Button disabled>Action</Button>
      <Button disabled>Action</Button>
      <Button disabled>Action</Button>
      <Button disabled>Action</Button>
    </div>
  ),
};

export const SmallButtonsGroup: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, auto)",
        gap: "16px",
        background: "#f5f5f5",
        padding: "16px",
      }}
    >
      <Button variant="btn-sm-secondary-main-filled">Action</Button>
      <Button variant="btn-sm-secondary-outlined">Action</Button>
      <Button variant="btn-sm-secondary-main-filled">Action</Button>
      <Button variant="btn-sm-secondary-outlined">Action</Button>

      <Button variant="btn-sm-primary-dark-filled">Action</Button>
      <Button variant="btn-sm-primary-outline">Action</Button>
      <Button variant="btn-sm-primary-dark-filled">Action</Button>
      <Button variant="btn-sm-primary-outline">Action</Button>

      <Button variant="btn-sm-secondary-main-filled">Action</Button>
      <Button variant="btn-sm-secondary-outlined">Action</Button>
      <Button variant="btn-sm-secondary-main-filled">Action</Button>
      <Button variant="btn-sm-secondary-outlined">Action</Button>

      <Button variant="btn-sm-primary-dark-filled">Action</Button>
      <Button variant="btn-sm-primary-outline">Action</Button>

      <Button variant="btn-sm-secondary-main-filled" disabled>
        Action
      </Button>
      <Button variant="btn-sm-secondary-outlined" disabled>
        Action
      </Button>
      <Button variant="btn-sm-secondary-main-filled" disabled>
        Action
      </Button>
      <Button variant="btn-sm-secondary-outlined" disabled>
        Action
      </Button>

      <Button variant="btn-sm-primary-dark-filled" disabled>
        Action
      </Button>
      <Button variant="btn-sm-primary-outline" disabled>
        Action
      </Button>
    </div>
  ),
};

// Muestra completa de botones como el diseño de Figma
export const AllButtonVariants: Story = {
  render: () => (
    <div style={{ padding: "20px" }}>
      {/* Links */}
      <div
        style={{
          border: "1px dashed #7C4DFF",
          borderRadius: "8px",
          padding: "16px",
          marginBottom: "16px",
          width: "fit-content",
        }}
      >
        <Button variant="text" style={{ color: "#0E5E5F" }}>
          Link Title
        </Button>
        <div style={{ marginTop: "8px" }}>
          <Button variant="text" style={{ color: "#F26540" }}>
            Link Title
          </Button>
        </div>
      </div>

      {/* Contenedor principal de botones */}
      <div
        style={{
          border: "1px dashed #7C4DFF",
          borderRadius: "8px",
          padding: "16px",
          display: "flex",
          gap: "32px",
        }}
      >
        {/* Columna izquierda - Botones naranjas/coral */}
        <div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, auto)",
              gap: "16px",
              marginBottom: "16px",
            }}
          >
            <Button variant="btn-lg-secondary-main-filled">Action</Button>
            <Button variant="btn-lg-secondary-outlined">Action</Button>
            <Button variant="btn-lg-secondary-dropdown" hasDropdownIcon={true}>
              Options
            </Button>

            <Button variant="btn-lg-secondary-main-filled">Action</Button>
            <Button variant="btn-lg-secondary-outlined">Action</Button>
            <Button variant="btn-lg-secondary-dropdown" hasDropdownIcon={true}>
              Options
            </Button>

            <Button variant="btn-lg-secondary-main-filled">Action</Button>
            <Button variant="btn-lg-secondary-outlined">Action</Button>
            <Button variant="btn-lg-secondary-dropdown" hasDropdownIcon={true}>
              Options
            </Button>

            <Button variant="btn-lg-secondary-main-filled" disabled>
              Action
            </Button>
            <Button variant="btn-lg-secondary-outlined" disabled>
              Action
            </Button>
            <Button
              variant="btn-lg-secondary-dropdown"
              hasDropdownIcon={true}
              disabled
            >
              Options
            </Button>
          </div>

          {/* Botones pequeños */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, auto)",
              gap: "16px",
              marginTop: "32px",
            }}
          >
            <Button variant="btn-sm-secondary-main-filled">Action</Button>
            <Button variant="btn-sm-secondary-outlined">Action</Button>
            <Button variant="btn-sm-secondary-main-filled">Action</Button>
            <Button variant="btn-sm-secondary-outlined">Action</Button>

            <Button variant="btn-sm-secondary-main-filled">Action</Button>
            <Button variant="btn-sm-secondary-outlined">Action</Button>
            <Button variant="btn-sm-secondary-main-filled">Action</Button>
            <Button variant="btn-sm-secondary-outlined">Action</Button>

            <Button variant="btn-sm-secondary-main-filled" disabled>
              Action
            </Button>
            <Button variant="btn-sm-secondary-outlined" disabled>
              Action
            </Button>
            <Button variant="btn-sm-secondary-main-filled" disabled>
              Action
            </Button>
            <Button variant="btn-sm-secondary-outlined" disabled>
              Action
            </Button>
          </div>
        </div>

        {/* Columna derecha - Botones verdes/teal */}
        <div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, auto)",
              gap: "16px",
              marginBottom: "16px",
            }}
          >
            <Button variant="btn-lg-primary-dark-filled">Action</Button>
            <Button variant="btn-lg-primary-outline">Action</Button>
            <Button variant="btn-lg-transparent-outline">Action</Button>
            <Button variant="btn-lg-primary-main-filled">Action</Button>

            <Button variant="btn-lg-primary-dark-filled">Action</Button>
            <Button variant="btn-lg-primary-dark-filled">Action</Button>
            <Button variant="btn-lg-transparent-outline">Action</Button>
            <Button variant="btn-sm-primary-dark-filled">Action</Button>

            <Button variant="btn-lg-primary-main-filled">Action</Button>
            <Button variant="btn-lg-primary-dark-filled">Action</Button>
            <Button variant="btn-lg-transparent-outline">Action</Button>
            <Button variant="btn-lg-primary-main-filled">Action</Button>

            <Button disabled>Action</Button>
            <Button disabled>Action</Button>
            <Button disabled>Action</Button>
            <Button disabled>Action</Button>
          </div>

          {/* Botones pequeños */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, auto)",
              gap: "16px",
              marginTop: "32px",
            }}
          >
            <Button variant="btn-sm-primary-dark-filled">Action</Button>
            <Button variant="btn-sm-primary-outline">Action</Button>
            <Button variant="btn-sm-primary-dark-filled">Action</Button>
            <Button variant="btn-sm-primary-outline">Action</Button>

            <Button variant="btn-sm-primary-dark-filled">Action</Button>
            <Button variant="btn-sm-primary-outline">Action</Button>

            <Button variant="btn-sm-primary-dark-filled" disabled>
              Action
            </Button>
            <Button variant="btn-sm-primary-outline" disabled>
              Action
            </Button>
          </div>
        </div>
      </div>
    </div>
  ),
};
