import React from 'react';
import { StyledComponent } from '@emotion/styled';
import { BaseProps, TypographyProps } from 'system';
export declare type StyledButtonProps = React.ComponentPropsWithoutRef<'button'> & BaseProps & TypographyProps;
export declare type ButtonProps = StyledComponent<'button', any, StyledButtonProps> & {
    isLoading?: boolean;
    variant?: 'primary' | 'secondary' | 'bare';
};
export declare const Button: React.ForwardRefExoticComponent<StyledComponent<"button", any, StyledButtonProps> & {
    isLoading?: boolean | undefined;
    variant?: "primary" | "secondary" | "bare" | undefined;
} & React.RefAttributes<HTMLButtonElement>>;
