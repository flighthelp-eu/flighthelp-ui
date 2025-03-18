import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Botón Primario",
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
