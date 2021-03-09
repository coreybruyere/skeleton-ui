import React from 'react';
import styled from '@emotion/styled';

import { Box, BoxProps } from '../Box';

export type StyledTagProps = BoxProps;

export const StyledTag = styled(Box)<StyledTagProps>`
  display: inline-block;
  overflow: visible;
  border-width: 1px;
  border-style: solid;
  border-color: #a7b3be;
`;

export type TagProps = StyledTagProps & {
  children: React.ReactNode;
};

export const Tag: React.FC<TagProps> = ({ children, ...rest }) => (
  <StyledTag {...rest}>{children}</StyledTag>
);
