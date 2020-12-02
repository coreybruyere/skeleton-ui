/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { forwardRef } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/css';

import { shouldForwardProp } from '../../system';
import { Box, BoxProps } from '../Box';
import { Flex } from '../Flex';
import { Label } from '../Label';

export type StyledCheckboxProps = React.ComponentPropsWithoutRef<'input'> &
  BoxProps & {
    label: string;
    disabled?: boolean;
    error?: boolean;
  };

const checkboxIconStyles = (props: any) => css`
  cursor: pointer;

  &:hover {
    color: ${props.error
      ? props.theme.colors.error
      : props.theme.colors.primary};
  }

  input:focus ~ & {
    color: ${props.error
      ? props.theme.colors.error
      : props.theme.colors.primary};
  }

  input:checked:disabled ~ &,
  input:disabled ~ & {
    color: ${props.theme.colors.muted};
  }

  input:checked ~ & {
    color: ${props.error
      ? props.theme.colors.error
      : props.theme.colors.primary};
  }
`;

const CheckedIcon = (props: any) => (
  <svg width={24} height={24} viewBox="0 0 24 24" {...props}>
    <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
);

const UncheckedIcon = (props: any) => (
  <svg width={24} height={24} viewBox="0 0 24 24" {...props}>
    <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
  </svg>
);

const Checked = styled(CheckedIcon)`
  display: none;

  input:checked ~ & {
    display: block;
  }

  ${checkboxIconStyles}
`;

const Unchecked = styled(UncheckedIcon)`
  display: block;

  input:checked ~ & {
    display: none;
  }

  ${checkboxIconStyles}
`;

const CheckboxIcon = (props: any) => (
  <React.Fragment>
    <Checked {...props} />
    <Unchecked {...props} />
  </React.Fragment>
);

export const StyledCheckbox = styled(Box, {
  shouldForwardProp,
})<StyledCheckboxProps>``;

export type CheckboxProps = StyledCheckboxProps;

/* Add Optional label wrap, enabling consumer to specify if they need a label or not by passing a label string */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, disabled, error, ...rest }, ref) => (
    <Label sx={{ cursor: 'pointer' }}>
      <Flex alignItems="center">
        <StyledCheckbox
          as={'input'}
          type="checkbox"
          ref={ref as any}
          disabled={disabled}
          {...rest}
          position="absolute"
          opacity={0}
          zIndex={-1}
          width={1}
          height={1}
          overflow="hidden"
        />
        <Box
          as={CheckboxIcon}
          aria-hidden="true"
          disabled={disabled}
          error={error}
        />
        <Box ml={1}>{label}</Box>
      </Flex>
    </Label>
  )
);
