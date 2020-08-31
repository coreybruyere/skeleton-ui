import React from 'react';
import { ThemeProvider as ThemeDecorator } from 'theme-ui';
import { theme } from '../../theme';

export const ThemeProvider = ({ children }) => (
  <ThemeDecorator theme={theme}>{children}</ThemeDecorator>
);
