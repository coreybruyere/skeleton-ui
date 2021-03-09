import React, { forwardRef } from 'react';
import styled from '@emotion/styled';
import { compose, variant } from 'styled-system';

import { TypographyProps, typographyStyleProps } from '../../system';
import { Flex, FlexProps } from '../Flex';
import { Button } from '../Button';

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
  FlexProps;

const StyledAlert = styled(Flex)<AlertProps>(
  compose(...typographyStyleProps, alertVariants)
);

export type AlertProps = StyledAlertProps & {
  children: React.ReactNode;
  isDismissable?: boolean;
  variant?: 'primary' | 'secondary' | 'bare';
};

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ children, variant = 'primary', isDismissable = true, ...rest }, ref) => (
    <StyledAlert variant={variant} ref={ref as any} {...rest}>
      {children}
      {isDismissable && <Button variant="bare">x</Button>}
    </StyledAlert>
  )
);
