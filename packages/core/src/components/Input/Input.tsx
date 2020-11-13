import React, { forwardRef } from 'react';
import styled from '@emotion/styled';

import { Base, BaseProps, shouldForwardProp } from '../../system';

export type StyledInputProps = React.ComponentPropsWithoutRef<'input'> &
  BaseProps;

export const StyledInput = styled(Base, {
  shouldForwardProp,
})<StyledInputProps>`
  color: red;
`;

export type InputProps = StyledInputProps;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ children, ...rest }, ref) => (
    <StyledInput as={'input'} ref={ref as any} {...rest}>
      {children}
    </StyledInput>
  )
);
