import React from 'react';
import { Global as BaseGlobal } from '@emotion/core';

import { Theme } from '../ThemeProvider';

export const Global: React.FC<Theme> = () => {
  return (
    <BaseGlobal
      styles={() => ({
        '*': {
          boxSizing: 'border-box',
        },
      })}
    />
  );
};
