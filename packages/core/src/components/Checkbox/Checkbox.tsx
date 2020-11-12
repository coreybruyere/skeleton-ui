import React, { forwardRef } from 'react';
import { StyledComponent } from '@emotion/styled';

import * as S from './styles';

export type CheckboxProps = StyledComponent<
  'checkbox',
  any,
  S.StyledCheckboxProps
>;

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ children, ...rest }, ref) => (
    <S.Label>
      <>
        {children}
        <S.Checkbox as={'input'} type="checkbox" ref={ref as any} {...rest} />
      </>
    </S.Label>
  )
);
