import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import TextField from "./InputText";
import { ThemeProvider } from "@mui/material";
import customCreateTheme from "../../theme/themeFlighthelp";

const meta: Meta<typeof TextField> = {
  title: "Components/TextField",
  component: TextField,
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "error"],
      defaultValue: "primary",
    },
    label: { control: "text" },
    helperText: { control: "text" },
    disabled: { control: "boolean" },
    required: { control: "boolean" },
  },
  decorators: [
    (Story, context) => {
      const selectedTheme = context.globals.theme || "flightHelp";
      return (
        <ThemeProvider theme={customCreateTheme(selectedTheme)}>
          <Story />
        </ThemeProvider>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof TextField>;

export const Primary: Story = {
  args: {
    variant: "primary",
    label: "Primary TextField",
    placeholder: "Enter text here",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    label: "Secondary TextField",
    placeholder: "Enter text here",
  },
};

export const WithHelperText: Story = {
  args: {
    variant: "primary",
    label: "With Helper Text",
    helperText: "This is a helper text",
    placeholder: "Enter text here",
  },
};

export const WithTitle: Story = {
  args: {
    variant: "primary",
    placeholder: "Enter text here",
    title: "Best Title Ever",
    required: true,
  },
};

export const Error: Story = {
  args: {
    variant: "error",
    label: "Error State",
    helperText: "This field has an error",
    placeholder: "Enter text here",
  },
};

export const Disabled: Story = {
  args: {
    variant: "primary",
    label: "Disabled TextField",
    placeholder: "You cannot edit this field",
    disabled: true,
  },
};

export const Required: Story = {
  args: {
    variant: "primary",
    label: "Required Field",
    placeholder: "This field is required",
    required: true,
  },
};

export const WithValue: Story = {
  args: {
    variant: "primary",
    label: "With Default Value",
    defaultValue: "Default text",
  },
};

export const Password: Story = {
  args: {
    variant: "primary",
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
  },
};

export const Multiline: Story = {
  args: {
    variant: "primary",
    label: "Multiline TextField",
    multiline: true,
    rows: 4,
    placeholder: "Enter multiple lines of text",
  },
};

export const Masked: Story = {
  args: {
    variant: "masked",
    title: "Website URL",
    placeholder: "Company Name",
    urlPrefix: "flighthelp.eu/",
  },
};
