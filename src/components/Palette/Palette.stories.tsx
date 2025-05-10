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

// Helper function to safely extract colors from the nested palette structure
const safeExtractColors = (obj: any, prefix = ""): Record<string, string> => {
  if (!obj) return {};

  const result: Record<string, string> = {};

  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "string") {
      result[prefix ? `${prefix}.${key}` : key] = value;
    } else if (typeof value === "object" && value !== null) {
      // For nested objects, recursively extract colors with prefixed keys
      const nestedPrefix = prefix ? `${prefix}.${key}` : key;
      const nestedColors = safeExtractColors(value, nestedPrefix);
      Object.assign(result, nestedColors);
    }
  }

  return result;
};

const ColorSystem = () => {
  const customPalette = palette as any;

  // Create a function to build sections from the palette
  const buildSections = () => {
    const sections = [];

    // Process each top-level key in the palette
    for (const [key, value] of Object.entries(customPalette)) {
      // Skip mode or other non-object properties
      if (typeof value !== "object" || value === null) {
        if (key === "divider" && typeof value === "string") {
          sections.push({
            title: "Divider",
            colors: { divider: value },
          });
        }
        continue;
      }

      // Extract colors for this section
      const colors = safeExtractColors(value);

      // Only add sections with colors
      if (Object.keys(colors).length > 0) {
        sections.push({
          title: key.charAt(0).toUpperCase() + key.slice(1), // Capitalize first letter
          colors: colors,
        });
      }
    }

    return sections;
  };

  const sections = buildSections();

  return (
    <Container>
      <h1 style={{ marginBottom: "16px" }}>Color Palette</h1>
      <p style={{ marginBottom: "32px" }}>
        These are the colors available in the FlightHelp UI theme.
      </p>

      {sections.map((section) => (
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
