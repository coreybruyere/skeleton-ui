import React, { forwardRef } from 'react';
import styled from '@emotion/styled';

import { Box, BoxProps } from '../Box';

export type StyledDividerProps = React.ComponentPropsWithoutRef<'hr'> &
  BoxProps;

export const StyledDivider = styled(Box)<StyledDividerProps>`
  height: 0;
  overflow: visible;
  border: none;
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: #a7b3be;
`;

export type DividerProps = StyledDividerProps;

export const Divider = forwardRef<HTMLHRElement, DividerProps>(
  ({ ...rest }, ref) => (
    <StyledDivider as={'hr'} ref={ref as any} role="separator" {...rest} />
  )
);
