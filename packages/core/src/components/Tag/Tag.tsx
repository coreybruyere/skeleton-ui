/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';

import { Text, TextProps } from '../Text';

export type StyledTagProps = TextProps;

export type TagProps = StyledTagProps & {
  children: React.ReactNode;
};

export const Tag: React.FC<TagProps> = ({ children, sx, ...rest }) => (
  <Text
    overflow={'visible'}
    fontSize={2}
    borderColor={'border'}
    borderWidth={1}
    borderStyle={'solid'}
    borderRadius={2}
    {...rest}
    sx={{
      display: 'inline-block',
      py: 1,
      px: 2,
      ...sx,
    }}
  >
    {children}
  </Text>
);
