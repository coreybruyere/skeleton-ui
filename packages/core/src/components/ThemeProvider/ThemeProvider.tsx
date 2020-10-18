import React from 'react';
import {
  ThemeProvider as ThemeDecorator,
  ThemeProviderProps as ThemeDecoratorProps,
} from '@theme-ui/core';
import { theme as defaultTheme } from '../../theme';

const merge = require('deepmerge');

export const ThemeProvider = (props: ThemeDecoratorProps) => {
  const { children, theme } = props;
  const mergedTheme = theme ? merge(defaultTheme, theme) : defaultTheme;

  return <ThemeDecorator theme={mergedTheme}>{children}</ThemeDecorator>;
};
