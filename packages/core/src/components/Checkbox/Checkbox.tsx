import React, { forwardRef } from 'react';
import styled from '@emotion/styled';

import { Base, BaseProps, shouldForwardProp } from '../../system';

export type StyledCheckboxProps = React.ComponentPropsWithoutRef<'input'> &
  BaseProps;

export const StyledCheckbox = styled(Base, {
  shouldForwardProp,
})<StyledCheckboxProps>`
  color: red;
`;

export type CheckboxProps = StyledCheckboxProps;

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ children, ...rest }, ref) => (
    <StyledCheckbox as={'input'} type="checkbox" ref={ref as any} {...rest} />
  )
);
