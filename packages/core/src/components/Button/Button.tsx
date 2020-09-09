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
  ({ children, ...rest }, ref: any) => (
    <S.Button as={'button'} ref={ref} {...rest}>
      {children}
    </S.Button>
  )
);
