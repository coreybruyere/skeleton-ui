import React, { forwardRef } from 'react';
import styled from '@emotion/styled';

import { Box, BoxProps } from '../Box';

export type StyledInputProps = React.ComponentPropsWithoutRef<'input'> &
  BoxProps;

export const StyledInput = styled(Box)<StyledInputProps>`
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
