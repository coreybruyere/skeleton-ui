import React from 'react';
import {
  ThemeProvider as ThemeDecorator,
  ThemeProviderProps as ThemeDecoratorProps,
} from 'theme-ui';
import { theme as defaultTheme } from '../../';

const merge = require('deepmerge');

export type HaikuThemeProviderProps = React.PropsWithChildren<{}> &
  Partial<ThemeDecoratorProps<typeof defaultTheme>>;

export const ThemeProvider = (props: HaikuThemeProviderProps) => {
  const { children, theme } = props;
  const mergedTheme = theme ? merge(defaultTheme, theme) : defaultTheme;

  return <ThemeDecorator theme={mergedTheme}>{children}</ThemeDecorator>;
};
