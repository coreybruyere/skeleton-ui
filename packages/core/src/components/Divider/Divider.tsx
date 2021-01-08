import React, { forwardRef } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/css';

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
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: #a7b3be;
  ${({ direction, height }) =>
    direction === 'vertical' &&
    css({
      height: height,
    })}
`;

export type DividerProps = StyledDividerProps;

export const Divider = forwardRef<HTMLHRElement, DividerProps>(
  ({ direction = 'horizontal', height = 0, ...rest }, ref) => (
    <StyledDivider
      as={'hr'}
      direction={direction}
      height={height}
      ref={ref as any}
      role="separator"
      {...rest}
    />
  )
);
