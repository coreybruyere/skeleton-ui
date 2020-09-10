import React, { forwardRef } from 'react';
import { StyledComponent } from '@emotion/styled';

import { BoxProps } from '..';
import * as S from './styles';

export type StyledInputProps = React.ComponentPropsWithoutRef<'input'> &
  BoxProps & {
    isLoading?: boolean;
  };

export type InputProps = StyledComponent<'input', any, StyledInputProps>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ children, ...rest }, ref) => (
    <S.Input as={'input'} ref={ref as any} {...rest}>
      {children}
    </S.Input>
  )
);
