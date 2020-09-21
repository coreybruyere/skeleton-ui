import React from "react";
import { ThemeProvider, Global } from "../packages/core/src/";
import { theme } from "../packages/core/src/theme";

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Global />
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
