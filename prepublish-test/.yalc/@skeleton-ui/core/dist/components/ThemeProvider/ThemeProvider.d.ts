import React from 'react';
import { theme as defaultTheme } from '../../theme';
declare type Theme = typeof defaultTheme;
export interface ThemeProviderProps {
    theme: Theme | ((outerTheme: Theme) => Theme);
    children?: React.ReactNode;
}
export declare const ThemeProvider: (props: ThemeProviderProps) => JSX.Element;
export {};
