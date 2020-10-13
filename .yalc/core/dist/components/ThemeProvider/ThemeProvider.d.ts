import React from 'react';
import { ThemeProviderProps as ThemeDecoratorProps } from 'theme-ui';
import { theme as defaultTheme } from '../../theme';
export declare type HaikuThemeProviderProps = React.PropsWithChildren<{}> & Partial<ThemeDecoratorProps<typeof defaultTheme>>;
export declare const ThemeProvider: (props: HaikuThemeProviderProps) => JSX.Element;
