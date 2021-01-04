import React, { forwardRef } from 'react';
import styled from '@emotion/styled';

import { Box, BoxProps } from '../Box';

export type StyledSelectProps = React.ComponentPropsWithoutRef<'select'> &
  BoxProps;

export const StyledSelect = styled(Box)<StyledSelectProps>`
  background: transparent;
  background-image: url(data:image/svg+xml,%0A%3Csvg%20width%3D%2215px%22%20height%3D%229px%22%20viewBox%3D%22301%2017%2015%209%22%20version%3D%221.1%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20xmlns%3Axlink%3D%22http%3A//www.w3.org/1999/xlink%22%3E%0A%20%20%20%20%3C%21--%20Generator%3A%20Sketch%2042%20%2836781%29%20-%20http%3A//www.bohemiancoding.com/sketch%20--%3E%0A%20%20%20%20%3Cdesc%3ECreated%20with%20Sketch.%3C/desc%3E%0A%20%20%20%20%3Cdefs%3E%3C/defs%3E%0A%20%20%20%20%3Cpolygon%20id%3D%22Combined-Shape%22%20stroke%3D%22none%22%20fill%3D%22%2398A8B3%22%20fill-rule%3D%22evenodd%22%20points%3D%22314.6%2018%20316%2019.3333333%20309%2026%20302%2019.3333333%20303.4%2018%20309%2023.3333333%22%3E%3C/polygon%3E%0A%3C/svg%3E);
  background-repeat: no-repeat;
  background-position: calc(100% - 2px) 50%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  -webkit-appearance: none;
  -moz-appearance: none;
`;

export type SelectProps = StyledSelectProps;

export const Select = forwardRef<HTMLInputElement, SelectProps>(
  ({ children, ...rest }, ref) => (
    <StyledSelect as={'select'} ref={ref as any} py={2} px={3} {...rest}>
      {children}
    </StyledSelect>
  )
);
