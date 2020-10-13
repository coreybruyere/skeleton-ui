import React from 'react';
import { StyledComponent } from '@emotion/styled';
import { BoxProps } from 'components';
export declare type StyledInputProps = React.ComponentPropsWithoutRef<'input'> & BoxProps & {
    isLoading?: boolean;
};
export declare type InputProps = StyledComponent<'input', any, StyledInputProps>;
export declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
