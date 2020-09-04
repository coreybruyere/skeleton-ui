import React from 'react';
import { StyledComponent } from '@emotion/styled';

import { BoxProps } from '../';
import * as S from './styles';

export type StyledButtonProps = React.ComponentPropsWithoutRef<'button'> &
  BoxProps & {
    isLoading?: boolean;
  };

export type ButtonProps = StyledComponent<'button', any, StyledButtonProps>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => (
    <S.Button as="button" ref={ref} {...props}>
      fdsa
    </S.Button>
  )
);
