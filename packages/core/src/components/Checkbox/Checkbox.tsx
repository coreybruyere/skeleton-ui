import React, { forwardRef } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/css';

import { Base, BaseProps, shouldForwardProp } from '../../system';
import { Box, Flex, Label } from '../../components';

export type StyledCheckboxProps = React.ComponentPropsWithoutRef<'input'> &
  BaseProps & {
    disabled?: boolean;
    error?: boolean;
  };

const BaseIcon = styled(Base)`
  color: 'red';

  &:hover {
    color: ${(props: any) =>
      props.error ? props.theme.colors.error : props.theme.colors.primary};
  }
  input:focus ~ & {
    color: ${(props: any) =>
      props.error ? props.theme.colors.error : props.theme.colors.primary};
  }
  input:checked:disabled ~ &,
  input:disabled ~ & {
    color: ${(props: any) => props.theme.colors.muted};
  }
  input:checked ~ & {
    color: ${(props: any) =>
      props.error ? props.theme.colors.error : props.theme.colors.primary};
  }
`;

const CheckedIcon = () => <BaseIcon>X</BaseIcon>;

const UncheckedIcon = () => <BaseIcon>[]</BaseIcon>;

const Unchecked = styled(UncheckedIcon)`
  display: none;
  input:checked ~ & {
    display: block;
  }
`;

const Checked = styled(CheckedIcon)`
  display: block;
  input:checked ~ & {
    display: none;
  }
`;

const CheckboxIcon = (props: any) => (
  <>
    <Unchecked {...props} />
    <Checked {...props} />
  </>
);

export const StyledCheckbox = styled(Base, {
  shouldForwardProp,
})<StyledCheckboxProps>`
  color: red;
`;

export type CheckboxProps = StyledCheckboxProps;

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ children, ...rest }, ref) => (
    <Label>
      <Flex>
        <StyledCheckbox
          as={'input'}
          type="checkbox"
          ref={ref as any}
          {...rest}
        />
        <Box as={CheckboxIcon}></Box>
      </Flex>
    </Label>
  )
);
