import React from 'react';
import { ThemeProvider as ThemeDecorator } from 'theme-ui';
import { theme as defaultTheme } from '../../theme';

const merge = require('deepmerge');

export type Theme = typeof defaultTheme;

export interface ThemeProviderProps {
  theme: Theme | ((outerTheme: Theme) => Theme);
  children?: React.ReactNode;
}

export const ThemeProvider = (props: ThemeProviderProps) => {
  const { children, theme } = props;
  const mergedTheme = theme ? merge(defaultTheme, theme) : defaultTheme;

  return <ThemeDecorator theme={mergedTheme}>{children}</ThemeDecorator>;
};
