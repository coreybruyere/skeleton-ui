/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { forwardRef } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/css';

import { shouldForwardProp } from '../../system';
import { Box, BoxProps } from '../Box';
import { Flex } from '../Flex';
import { Label } from '../Label';
import { ConditionalWrap } from '../ConditionalWrap';

export type StyledRadioProps = React.ComponentPropsWithoutRef<'input'> &
  BoxProps & {
    label?: string;
    disabled?: boolean;
    error?: boolean;
  };

const radioIconStyles = (props: any) => css`
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
  <Box
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 32 32"
    as="svg"
    {...props}
  >
    <path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 28c-6.627 0-12-5.373-12-12s5.373-12 12-12c6.627 0 12 5.373 12 12s-5.373 12-12 12zM10 16c0-3.314 2.686-6 6-6s6 2.686 6 6c0 3.314-2.686 6-6 6s-6-2.686-6-6z"></path>
  </Box>
);

const UncheckedIcon = (props: any) => (
  <Box
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 32 32"
    as="svg"
    {...props}
  >
    <path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 28c-6.627 0-12-5.373-12-12s5.373-12 12-12c6.627 0 12 5.373 12 12s-5.373 12-12 12z"></path>
  </Box>
);

const Checked = styled(CheckedIcon)`
  display: none;

  input:checked ~ & {
    display: block;
  }

  ${radioIconStyles}
`;

const Unchecked = styled(UncheckedIcon)`
  display: block;

  input:checked ~ & {
    display: none;
  }

  ${radioIconStyles}
`;

const RadioIcon = (props: any) => (
  <React.Fragment>
    <Checked {...props} />
    <Unchecked {...props} />
  </React.Fragment>
);

export const StyledRadio = styled(Box, {
  shouldForwardProp,
})<StyledRadioProps>``;

export type RadioProps = StyledRadioProps;

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    { label, disabled, error, m, mt, mr, mb, ml, p, pt, pr, pb, pl, ...rest },
    ref
  ) => (
    <ConditionalWrap
      condition={label}
      wrapper={(children: React.ReactNode) => (
        <Label sx={{ cursor: 'pointer' }}>{children}</Label>
      )}
    >
      <Flex alignItems="center">
        <StyledRadio
          as={'input'}
          type="radio"
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
        <RadioIcon
          aria-hidden="true"
          disabled={disabled as any}
          error={error}
          m={m}
          mt={mt}
          mr={mr}
          mb={mb}
          ml={ml}
          p={p}
          pt={pt}
          pr={pr}
          pb={pb}
          pl={pl}
        />
        {label && <Box ml={1}>{label}</Box>}
      </Flex>
    </ConditionalWrap>
  )
);
