import React from 'react';
import { Global as BaseGlobal } from '@emotion/core';

export const Global = () => {
  return (
    <BaseGlobal
      styles={theme => ({
        '*': {
          boxSizing: 'border-box',
          color: theme.colors.text,
        },
      })}
    />
  );
};
