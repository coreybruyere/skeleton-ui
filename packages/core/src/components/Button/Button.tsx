import React, { forwardRef } from 'react';
import { StyledComponent } from '@emotion/styled';

import { BoxProps } from '../';
import * as S from './styles';

export type StyledButtonProps = React.ComponentPropsWithoutRef<'button'> &
  BoxProps & {
    isLoading?: boolean;
  };

export type ButtonProps = StyledComponent<'button', any, StyledButtonProps>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...rest }, ref) => (
    <S.Button as={'button'} ref={ref as any} {...rest}>
      {children}
    </S.Button>
  )
);
