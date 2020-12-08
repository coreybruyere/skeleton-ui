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
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 32 32"
    {...props}
  >
    <path d="M28 0h-24c-2.2 0-4 1.8-4 4v24c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4v-24c0-2.2-1.8-4-4-4zM14 24.828l-7.414-7.414 2.828-2.828 4.586 4.586 9.586-9.586 2.828 2.828-12.414 12.414z"></path>
  </svg>
);

const UncheckedIcon = (props: any) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 32 32"
    {...props}
  >
    <path d="M28 0h-24c-2.2 0-4 1.8-4 4v24c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4v-24c0-2.2-1.8-4-4-4zM28 28h-24v-24h24v24z"></path>
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
