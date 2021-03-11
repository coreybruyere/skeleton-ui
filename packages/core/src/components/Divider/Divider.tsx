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

/**
 * This is where error was coming from: https://github.com/system-ui/theme-ui/issues/158
 * Theme has to be accessed, from within a styled-component as an HOC, using @theme-ui/css css utility. This is a complete paradigm shift, but always resort to props first, sx prop second, and css utility as a fallback for more complex css even though sx and props should be able to handle everything
 */

export const StyledDivider = styled(Box)<StyledDividerProps>`
  overflow: visible;
  border: none;

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
      bg={'border'}
      ref={ref as any}
      role="separator"
      aria-orientation={direction}
      {...rest}
    />
  )
);
