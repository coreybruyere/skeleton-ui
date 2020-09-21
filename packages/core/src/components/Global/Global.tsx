import React from 'react';
import { Global as BaseGlobal } from '@emotion/core';
import { ThemeProviderProps as ThemeDecoratorProps } from 'theme-ui';

import { theme } from '../../';

export type HaikuThemeProps = ThemeDecoratorProps<typeof theme>;

export const Global = ({ theme }: HaikuThemeProps) => (
  <BaseGlobal
    styles={theme => ({
      '*': {
        boxSizing: 'border-box',
      },
    })}
  />
);
