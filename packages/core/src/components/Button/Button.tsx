import React, { forwardRef } from 'react';
import { StyledComponent } from '@emotion/styled';

import * as S from './styles';

export type ButtonProps = StyledComponent<
  'button',
  any,
  S.StyledButtonProps
> & {
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
