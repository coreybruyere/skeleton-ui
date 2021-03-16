import React from 'react';

import { Text, TextProps } from '../Text';

export type StyledTagProps = TextProps;

export type TagProps = StyledTagProps & {
  children: React.ReactNode;
};

export const Tag: React.FC<TagProps> = ({ children, ...rest }) => (
  <Text
    display={'inline-block'}
    py={1}
    px={2}
    overflow={'visible'}
    fontSize={2}
    borderColor={'border'}
    borderWidth={1}
    borderStyle={'solid'}
    borderRadius={2}
    {...rest}
  >
    {children}
  </Text>
);
