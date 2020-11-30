import React, { forwardRef } from 'react';
import styled from '@emotion/styled';
import { compose, variant } from 'styled-system';

import { TypographyProps, typographyStyleProps } from '../../system';
import { Box, BoxProps } from '../Box';

const defaultextStyles = {
  fontFamily: 'body',
  fontWeight: 'body',
  lineHeight: 'body',
  color: 'text',
  mt: 0,
  mb: 0,
};

const buttonVariants = variant({
  variants: {
    primary: {
      ...defaultextStyles,
      fontSize: 3,
    },
    secondary: {
      ...defaultextStyles,
      fontSize: 1,
    },
    bare: {
      p: 0,
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
    <StyledButton as={'button'} variant={variant} ref={ref as any} {...rest}>
      {children}
    </StyledButton>
  )
);
