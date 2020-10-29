import React, { forwardRef } from 'react';
import { StyledComponent } from '@emotion/styled';

import * as S from './styles';

export type LabelProps = StyledComponent<'label', any, S.StyledLabelProps>;

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ children, ...rest }, ref) => (
    <S.Label as={'label'} ref={ref as any} {...rest}>
      {children}
    </S.Label>
  )
);
