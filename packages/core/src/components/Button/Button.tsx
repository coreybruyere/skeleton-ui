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
  cursor: 'pointer',
};

const buttonVariants = variant({
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

export type StyledButtonProps = React.ComponentPropsWithoutRef<'button'> &
  TypographyProps &
  BoxProps;

const StyledButton = styled(Box)<StyledButtonProps>(
  compose(...typographyStyleProps, buttonVariants)
);

export type ButtonProps = StyledButtonProps & {
  isLoading?: boolean;
  variant?: 'primary' | 'secondary' | 'bare';
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'primary', ...rest }, ref) => (
    <StyledButton
      as={'button'}
      variant={variant}
      ref={ref as any}
      {...(rest as any)}
    >
      {children}
    </StyledButton>
  )
);
