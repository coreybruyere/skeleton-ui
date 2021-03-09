import React from 'react';
import styled from '@emotion/styled';

import { Grid, GridProps } from '../Grid';

export type StyledStackProps = GridProps;

export const StyledStack = styled(Grid)<StyledStackProps>``;

export type StackProps = StyledStackProps & {
  children: React.ReactNode;
  space: any;
};

export const Stack: React.FC<StackProps> = ({ children, ...rest }) => (
  <StyledStack gridGap={4} {...rest}>
    {children}
  </StyledStack>
);
