import React, { forwardRef } from 'react';
import { StyledComponent } from '@emotion/styled';

import { BaseProps, TypographyProps } from 'system';
import * as S from './styles';

export type StyledButtonProps = React.ComponentPropsWithoutRef<'button'> &
  BaseProps &
  TypographyProps;

export type ButtonProps = StyledComponent<'button', any, StyledButtonProps> & {
  isLoading?: boolean;
  variant?: 'primary' | 'secondary' | 'bare';
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'primary', ...rest }, ref) => (
    <S.Button as={'button'} variant={variant} ref={ref as any} {...rest}>
      {children}
    </S.Button>
  )
);
