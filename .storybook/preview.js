import React from "react";
import { ThemeProvider } from "../packages/core/src/";
import { theme } from "../packages/core/src/theme";

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
