import React, { forwardRef } from 'react';
import styled from '@emotion/styled';

import { Box, BoxProps } from '../Box';

export type DividerDirection =
  | {
      direction: 'vertical';
      height?: number | string;
    }
  | {
      direction: 'horizontal';
    };

export type StyledDividerProps = React.ComponentPropsWithoutRef<'hr'> &
  BoxProps &
  DividerDirection;

export const StyledDivider = styled(Box)<StyledDividerProps>`
  overflow: visible;
  border: none;
  background-color: #a7b3be;
  ${({ direction }) =>
    direction === 'vertical' &&
    `
      display: inline-block;
      vertical-align: middle;
    `};
`;

export type DividerProps = StyledDividerProps;

export const Divider = forwardRef<HTMLHRElement, DividerProps>(
  ({ direction = 'horizontal', height, ...rest }, ref) => (
    <StyledDivider
      as={'hr'}
      direction={direction}
      height={direction === 'vertical' ? '16px' : 1}
      width={direction === 'vertical' ? '1px' : 'auto'}
      mx={direction === 'vertical' ? 2 : 0}
      my={direction === 'horizontal' ? 2 : 0}
      ref={ref as any}
      role="separator"
      {...rest}
    />
  )
);
