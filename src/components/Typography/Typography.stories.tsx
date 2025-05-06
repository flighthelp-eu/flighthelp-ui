import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Typography, ThemeProvider, Box } from "@mui/material";
import theme from "@/theme";

interface TypographyContainerProps {
  children: React.ReactNode;
  title: string;
}

const TypographyContainer: React.FC<TypographyContainerProps> = ({
  children,
  title,
}) => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="h3" sx={{ mb: 2 }}>
      {title}
    </Typography>
    {children}
  </Box>
);

interface TypographyExampleProps {
  variant:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "body1"
    | "body2"
    | "button"
    | "caption"
    | "overline"
    | "subtitle1"
    | "subtitle2"
    | "allCaps"
    | "bold18"
    | "regular18"
    | "bold16"
    | "regular16"
    | "bold14"
    | "regular14"
    | "bold12"
    | "regular12"
    | "bold10"
    | "regular10"
    | "normalLink"
    | "buttonLink"
    | "h1Light"
    | "h1Regular"
    | "h1Bold"
    | "h1SemiBold"
    | "h1Medium"
    | "h2Bold"
    | "h2Medium"
    | "h2Regular"
    | "h3Bold"
    | "h3Regular"
    | "regularBold"
    | "regularRegular"
    | "smallBold"
    | "smallSemiBold"
    | "xsmallRegular"
    | "xsmallSemiBold"
    | "mediumBold"
    | "mediumRegular"
    | "smallRegular"
    | "paragraphBold"
    | "paragraphMedium";
  description?: string;
}

const TypographyExample: React.FC<TypographyExampleProps> = ({
  variant,
  description,
}) => (
  <Box sx={{ mb: 3, border: "1px dashed #ccc", p: 2 }}>
    <Typography
      variant="caption"
      sx={{ color: "text.secondary", display: "block", mb: 1 }}
    >
      Variant: {variant}
    </Typography>
    <Typography variant={variant}>
      {description || "The quick brown fox jumps over the lazy dog."}
    </Typography>
  </Box>
);

const meta: Meta = {
  title: "Theme/Typography",
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

export const AllTypography: StoryObj = {
  render: () => (
    <>
      <Typography variant="h1" sx={{ mb: 4 }}>
        Typography System
      </Typography>

      <TypographyContainer title="Standard Headings">
        <TypographyExample variant="h1" description="H1 - Primary heading" />
        <TypographyExample variant="h2" description="H2 - Secondary heading" />
        <TypographyExample variant="h3" description="H3 - Tertiary heading" />
        <TypographyExample variant="h4" description="H4 - Quaternary heading" />
        <TypographyExample
          variant="h5"
          description="H5 - Fifth level heading"
        />
        <TypographyExample
          variant="h6"
          description="H6 - Sixth level heading"
        />
      </TypographyContainer>

      <TypographyContainer title="Text Styles">
        <TypographyExample
          variant="allCaps"
          description="ALL CAPS - UPPERCASE TEXT STYLE"
        />
        <TypographyExample
          variant="bold18"
          description="Bold.18 - Bold 18px text"
        />
        <TypographyExample
          variant="regular18"
          description="Regular.18 - Regular 18px text"
        />
        <TypographyExample
          variant="bold16"
          description="Bold.16 - Bold 16px text"
        />
        <TypographyExample
          variant="regular16"
          description="Regular.16 - Regular 16px text"
        />
        <TypographyExample
          variant="bold14"
          description="Bold.14 - Bold 14px text"
        />
        <TypographyExample
          variant="regular14"
          description="Regular.14 - Regular 14px text"
        />
        <TypographyExample
          variant="bold12"
          description="Bold.12 - SemiBold 12px text"
        />
        <TypographyExample
          variant="regular12"
          description="Regular.12 - Regular 12px text"
        />
        <TypographyExample
          variant="bold10"
          description="Bold.10 - Bold 10px text"
        />
        <TypographyExample
          variant="regular10"
          description="Regular.10 - Regular 10px text"
        />
      </TypographyContainer>

      <TypographyContainer title="Links">
        <TypographyExample
          variant="normalLink"
          description="Normal Link - Regular 12px underlined text"
        />
        <TypographyExample
          variant="buttonLink"
          description="Button Link - SemiBold 12px Title Case"
        />
      </TypographyContainer>

      <TypographyContainer title="Paragraphs">
        <TypographyExample
          variant="paragraphBold"
          description="Paragraph Bold - Bold 16px paragraph text"
        />
        <TypographyExample
          variant="paragraphMedium"
          description="Paragraph Medium - Medium 16px paragraph text"
        />
        <TypographyExample
          variant="mediumBold"
          description="Medium Bold - Bold 14px medium text"
        />
        <TypographyExample
          variant="mediumRegular"
          description="Medium Regular - Regular 14px medium text"
        />
        <TypographyExample
          variant="smallRegular"
          description="Small Regular - Regular 12px small text"
        />
      </TypographyContainer>
    </>
  ),
};

export const Headings: StoryObj = {
  render: () => (
    <>
      <Typography variant="h1" sx={{ mb: 4 }}>
        Headings
      </Typography>

      <TypographyExample variant="h1" description="H1 - Primary heading" />
      <TypographyExample variant="h2" description="H2 - Secondary heading" />
      <TypographyExample variant="h3" description="H3 - Tertiary heading" />
      <TypographyExample variant="h4" description="H4 - Quaternary heading" />
      <TypographyExample variant="h5" description="H5 - Fifth level heading" />
      <TypographyExample variant="h6" description="H6 - Sixth level heading" />
    </>
  ),
};

export const TextStyles: StoryObj = {
  render: () => (
    <>
      <Typography variant="h1" sx={{ mb: 4 }}>
        Text Styles
      </Typography>

      <TypographyExample
        variant="allCaps"
        description="ALL CAPS - UPPERCASE TEXT STYLE"
      />
      <TypographyExample
        variant="bold18"
        description="Bold.18 - Bold 18px text"
      />
      <TypographyExample
        variant="regular18"
        description="Regular.18 - Regular 18px text"
      />
      <TypographyExample
        variant="bold16"
        description="Bold.16 - Bold 16px text"
      />
      <TypographyExample
        variant="regular16"
        description="Regular.16 - Regular 16px text"
      />
      <TypographyExample
        variant="bold14"
        description="Bold.14 - Bold 14px text"
      />
      <TypographyExample
        variant="regular14"
        description="Regular.14 - Regular 14px text"
      />
      <TypographyExample
        variant="bold12"
        description="Bold.12 - SemiBold 12px text"
      />
      <TypographyExample
        variant="regular12"
        description="Regular.12 - Regular 12px text"
      />
      <TypographyExample
        variant="bold10"
        description="Bold.10 - Bold 10px text"
      />
      <TypographyExample
        variant="regular10"
        description="Regular.10 - Regular 10px text"
      />
    </>
  ),
};

export const Links: StoryObj = {
  render: () => (
    <>
      <Typography variant="h1" sx={{ mb: 4 }}>
        Links
      </Typography>

      <TypographyExample
        variant="normalLink"
        description="Normal Link - Regular 12px underlined text"
      />
      <TypographyExample
        variant="buttonLink"
        description="Button Link - SemiBold 12px Title Case"
      />
    </>
  ),
};
