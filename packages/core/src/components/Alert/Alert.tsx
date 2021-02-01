import React, { forwardRef } from 'react';
import styled from '@emotion/styled';
import { compose, variant } from 'styled-system';

import { TypographyProps, typographyStyleProps } from '../../system';
import { Box, BoxProps } from '../Box';

const defaultextStyles = {
  fontFamily: 'body',
  fontWeight: 'body',
  lineHeight: 'body',
  color: '#fff',
  mt: 0,
  mb: 0,
  border: 0,
};

const alertVariants = variant({
  variants: {
    primary: {
      ...defaultextStyles,
      fontSize: 1,
      bg: 'primary',
    },
    secondary: {
      ...defaultextStyles,
      fontSize: 1,
      bg: 'secondary',
    },
    bare: {
      p: 0,
      bg: 'transparent',
      border: 0,
      cursor: 'pointer',
    },
  },
});

export type StyledAlertProps = React.ComponentPropsWithoutRef<'div'> &
  TypographyProps &
  BoxProps;

const StyledAlert = styled(Box)<AlertProps>(
  compose(...typographyStyleProps, alertVariants)
);

export type AlertProps = StyledAlertProps & {
  isLoading?: boolean;
  variant?: 'primary' | 'secondary' | 'bare';
};

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ children, variant = 'primary', ...rest }, ref) => (
    <StyledAlert variant={variant} ref={ref as any} {...rest}>
      {children}
    </StyledAlert>
  )
);
