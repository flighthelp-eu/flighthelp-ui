import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { ThemeProvider } from "@mui/material/styles";
import { customCreateTheme } from "../../theme/theme";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    themeMode: {
      defaultValue: "flightHelp",
    },
  },
  argTypes: {
    themeVariant: {
      control: "select",
      options: ["flightHelp", "zaborAjutor"],
      defaultValue: "flightHelp",
      description: "Select theme variant",
    },
  },
  decorators: [
    (Story, context) => {
      const selectedTheme =
        context.args.themeVariant || context.globals.theme || "flightHelp";
      return (
        <ThemeProvider theme={customCreateTheme(selectedTheme)}>
          <Story />
        </ThemeProvider>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const DefaultVariant: Story = {
  args: {
    children: "Botón primario",
    size: "large",
  },
};

export const PrimaryBlue: Story = {
  args: {
    variant: "primaryBlue",
    children: "Botón primario",
    size: "large",
  },
};

export const SecondaryOrange: Story = {
  args: {
    variant: "secondaryOrange",
    children: "Botón Secundario",
    size: "large",
  },
};

export const SecondaryOutlined: Story = {
  args: {
    variant: "secondaryOutlined",
    children: "Action",
    size: "large",
  },
};

export const PrimaryOutline: Story = {
  args: {
    variant: "primaryOutline",
    children: "Action",
    size: "large",
  },
};

export const PrimaryMain: Story = {
  args: {
    variant: "primaryMain",
    children: "Botón Primary Main",
    size: "large",
  },
};

export const Transparent: Story = {
  render: () => (
    <div
      style={{
        background: "#D3D3D3",
        padding: "16px",
      }}
    >
      <Button size="large" variant="transparent">
        Action
      </Button>
    </div>
  ),
};

// Botones deshabilitados
export const DisabledPrimaryBlue: Story = {
  args: {
    variant: "primaryBlue",
    children: "Action",
    disabled: true,
    size: "large",
  },
};

export const DisabledSecondaryOrange: Story = {
  args: {
    variant: "secondaryOrange",
    children: "Action",
    disabled: true,
    size: "large",
  },
};

export const DisabledSecondaryOutlined: Story = {
  args: {
    variant: "secondaryOutlined",
    children: "Action",
    disabled: true,
    size: "large",
  },
};

export const SecondaryButtonsGroup: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, auto)",
        gap: "16px",
        background: "#f5f5f5",
        padding: "16px",
      }}
    >
      <Button variant="secondaryOrange">Action</Button>
      <Button variant="secondaryOutlined">Action</Button>

      <Button variant="secondaryOrange">Action</Button>
      <Button variant="secondaryOutlined">Action</Button>

      <Button variant="secondaryOrange">Action</Button>
      <Button variant="secondaryOutlined">Action</Button>

      <Button variant="secondaryOrange" disabled>
        Action
      </Button>
      <Button variant="secondaryOutlined" disabled>
        Action
      </Button>
    </div>
  ),
};

// Grupo de botones primarios
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
      <Button variant="primaryBlue">Action</Button>
      <Button variant="primaryOutline">Action</Button>
      <Button variant="transparent">Action</Button>
      <Button variant="primaryMain">Action</Button>

      <Button variant="primaryBlue">Action</Button>
      <Button variant="primaryOutline">Action</Button>
      <Button variant="transparent">Action</Button>
      <Button variant="primaryMain">Action</Button>

      <Button variant="primaryBlue">Action</Button>
      <Button variant="primaryOutline">Action</Button>
      <Button variant="transparent">Action</Button>
      <Button variant="primaryMain">Action</Button>

      <Button variant="primaryBlue" disabled>
        Action
      </Button>
      <Button variant="primaryOutline" disabled>
        Action
      </Button>
      <Button variant="transparent" disabled>
        Action
      </Button>
      <Button variant="primaryMain" disabled>
        Action
      </Button>
    </div>
  ),
};

// Vista completa de todas las variantes
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
              gridTemplateColumns: "repeat(2, auto)",
              gap: "16px",
              marginBottom: "16px",
            }}
          >
            <Button variant="secondaryOrange">Action</Button>
            <Button variant="secondaryOutlined">Action</Button>

            <Button variant="secondaryOrange">Action</Button>
            <Button variant="secondaryOutlined">Action</Button>

            <Button variant="secondaryOrange">Action</Button>
            <Button variant="secondaryOutlined">Action</Button>

            <Button variant="secondaryOrange" disabled>
              Action
            </Button>
            <Button variant="secondaryOutlined" disabled>
              Action
            </Button>
          </div>
        </div>

        {/* Columna derecha - Botones azules/verdes */}
        <div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, auto)",
              gap: "16px",
              marginBottom: "16px",
            }}
          >
            <Button variant="primaryBlue">Action</Button>
            <Button variant="primaryOutline">Action</Button>
            <Button variant="transparent">Action</Button>
            <Button variant="primaryMain">Action</Button>

            <Button variant="primaryBlue">Action</Button>
            <Button variant="primaryOutline">Action</Button>
            <Button variant="transparent">Action</Button>
            <Button variant="primaryMain">Action</Button>

            <Button variant="primaryBlue">Action</Button>
            <Button variant="primaryOutline">Action</Button>
            <Button variant="transparent">Action</Button>
            <Button variant="primaryMain">Action</Button>

            <Button variant="primaryBlue" disabled>
              Action
            </Button>
            <Button variant="primaryOutline" disabled>
              Action
            </Button>
            <Button variant="transparent" disabled>
              Action
            </Button>
            <Button variant="primaryMain" disabled>
              Action
            </Button>
          </div>
        </div>
      </div>
    </div>
  ),
};
