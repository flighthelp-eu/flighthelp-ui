import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { styled } from "@mui/material/styles";
import palette from "../../theme/palette";

interface ColorPaletteProps {
  title: string;
  colors: Record<string, string>;
}

const Container = styled("div")({
  fontFamily: '"Lexend deca", sans-serif',
  padding: "16px",
});

const Title = styled("h2")({
  fontSize: "1.5rem",
  marginBottom: "16px",
  color: "#1F232D", // Hardcoded to avoid type issues
});

const ColorsGrid = styled("div")({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
  gap: "16px",
});

const ColorCard = styled("div")({
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
});

const ColorSwatch = styled("div")<{ bgcolor: string }>(({ bgcolor }) => ({
  height: "100px",
  backgroundColor: bgcolor,
}));

const ColorInfo = styled("div")({
  padding: "16px",
  backgroundColor: "#FFFFFF",
});

const ColorName = styled("div")({
  fontWeight: 600,
  marginBottom: "4px",
});

const ColorValue = styled("div")({
  fontSize: "0.875rem",
  color: "#5F6677",
  fontFamily: "monospace",
});

const ColorPalette = ({ title, colors }: ColorPaletteProps) => (
  <div style={{ marginBottom: "32px" }}>
    <Title>{title}</Title>
    <ColorsGrid>
      {Object.entries(colors).map(([name, value]) => (
        <ColorCard key={name}>
          <ColorSwatch bgcolor={value} />
          <ColorInfo>
            <ColorName>{name}</ColorName>
            <ColorValue>{value}</ColorValue>
          </ColorInfo>
        </ColorCard>
      ))}
    </ColorsGrid>
  </div>
);

// Helper function to safely extract colors from the palette
const safeExtractColors = (obj: any): Record<string, string> => {
  if (!obj) return {};

  const result: Record<string, string> = {};
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "string") {
      result[key] = value;
    }
  }
  return result;
};

const ColorSystem = () => {
  // Type assertion for custom properties
  const customPalette = palette as any;

  // Extract all color categories
  const primaryColors = safeExtractColors(customPalette.primary);
  const secondaryColors = safeExtractColors(customPalette.secondary);
  const typographyColors = safeExtractColors(customPalette.typography);
  const backgroundColors = safeExtractColors(customPalette.backgrounds);
  const hartColors = safeExtractColors(customPalette.hart);
  const systemHeaderColors = safeExtractColors(customPalette.systemHeader);
  const searchColors = safeExtractColors(customPalette.search);
  const buttonColors = safeExtractColors(customPalette.buttons);
  const shadowColors = safeExtractColors(customPalette.shadow);
  const commonColors = safeExtractColors(customPalette.common);

  // Define all sections with titles and colors
  const sections = [
    { title: "Primary Colors", colors: primaryColors },
    { title: "Secondary Colors", colors: secondaryColors },
    { title: "Typography", colors: typographyColors },
    { title: "Backgrounds", colors: backgroundColors },
    { title: "Hart", colors: hartColors },
    { title: "System Header", colors: systemHeaderColors },
    { title: "Search", colors: searchColors },
    { title: "Buttons", colors: buttonColors },
    { title: "Shadows", colors: shadowColors },
    { title: "Common Colors", colors: commonColors },
  ];

  // Add divider if it exists
  if (typeof customPalette.divider === "string") {
    sections.push({
      title: "Divider",
      colors: { divider: customPalette.divider },
    });
  }

  return (
    <Container>
      <h1 style={{ marginBottom: "16px" }}>Color Palette</h1>
      <p style={{ marginBottom: "32px" }}>
        These are the colors available in the FlightHelp UI theme.
      </p>

      {sections
        .filter((section) => Object.keys(section.colors).length > 0)
        .map((section) => (
          <ColorPalette
            key={section.title}
            title={section.title}
            colors={section.colors}
          />
        ))}
    </Container>
  );
};

const meta: Meta<typeof ColorSystem> = {
  title: "Theme/Colors",
  component: ColorSystem,
};

export default meta;

type Story = StoryObj<typeof ColorSystem>;

export const Colors: Story = {};
