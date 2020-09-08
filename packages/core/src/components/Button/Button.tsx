// import React, { Ref } from 'react';
// import { StyledComponent } from '@emotion/styled';

// import { BoxProps } from '../';
// import * as S from './styles';

// export type StyledButtonProps = React.ComponentPropsWithoutRef<'button'> &
//   BoxProps & {
//     isLoading?: boolean;
//   };

// export type ButtonProps = StyledComponent<'button', any, StyledButtonProps>;

// export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
//   (props, ref: Ref<HTMLButtonElement>) => (
//     <S.Button as="button" ref={ref} {...props}>
//       fdsa
//     </S.Button>
//   )
// );

// import React, { Ref, forwardRef } from 'react';
// import styled, { StyledComponent } from '@emotion/styled';
// import {
//   border,
//   compose,
//   flexbox,
//   layout,
//   position,
//   space,
//   variant,
//   BorderProps,
//   FlexboxProps,
//   LayoutProps,
//   PositionProps,
//   SpaceProps,
// } from 'styled-system';
// import { Box, BoxProps } from '../';

// export type StyledButtonProps = BoxProps & {
//   variant?: 'primary' | 'secondary' | 'transparent';
// };

// const defaultButtonStyles = {
//   position: 'relative',
//   fontFamily: 'body',
//   fontSize: 2,
//   fontWeight: 'regular',
//   lineHeight: 'copy',
//   borderRadius: 0,
//   borderWidth: 2,
//   borderStyle: 'solid',
//   padding: 3,
//   ml: 0,
//   mr: 0,
//   mb: 0,
//   appearance: 'none',
// };

// const buttonVariants = variant({
//   variants: {
//     primary: {
//       ...defaultButtonStyles,
//       color: 'colors.text',

//       '&:hover': {
//         backgroundColor: 'colors.text',
//       },
//     },
//     secondary: {
//       ...defaultButtonStyles,
//       color: 'colors.text',

//       '&:hover': {
//         backgroundColor: 'colors.text',
//       },
//     },
//     transparent: {
//       ...defaultButtonStyles,
//       color: 'colors.text',

//       '&:hover': {
//         backgroundColor: 'colors.text',
//       },
//     },
//   },
// });

// export type ButtonProps = React.DetailedHTMLProps<
//   React.ButtonHTMLAttributes<HTMLButtonElement>,
//   HTMLButtonElement
// > &
//   BoxProps;

// const StyledButton = styled(Box)<ButtonProps>`
//   ${buttonVariants}
//   ${compose(space, layout, flexbox, border, position)}
// `;

// export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
//   ({ children, ...props }, ref: Ref<HTMLButtonElement>) => (
//     <StyledButton ref={ref} py={2}>
//       {children}
//     </StyledButton>
//   )
// );

// Button.defaultProps = {
//   variant: 'primary',
// };

import { Theme } from 'theme-ui';
import styled from '@emotion/styled';
import {
  Box,
  BoxProps,
  variant,
  VariantProps,
  systemProps,
  shouldForwardProp,
  sx,
} from '../';

// /**
//  * base
//  *
//  * Generate the base CSS for the button component
//  * that is aware of the Theme UI theme
//  *
//  * @param props
//  */
// export function base({ theme }: { theme: Theme }): SerializedStyles {
//   return css({
//     px: 3,
//     py: 2,
//     color: 'white',
//     bg: 'primary',
//     border: 0,
//     borderRadius: 'default',
//     '&:hover': {
//       bg: 'secondary',
//     },
//   })(theme);
// }

export const buttonVariant = ({
  variant: variantProp,
  variantKey = 'buttons',
  theme,
}: { theme: Theme } & VariantProps) =>
  variant({ variant: variantProp, theme, variantKey });

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  VariantProps &
  BoxProps;

/**
 * Button primitive component
 */
export const Button = styled(Box, {
  shouldForwardProp,
})<ButtonProps>(
  {
    appearance: 'none',
    cursor: 'pointer',
    display: 'inline-block',
    fontSize: 'inherit',
    lineHeight: 'inherit',
    textAlign: 'center',
    textDecoration: 'none',
    transition: 'all 0.2s ease-in-out',
  },
  buttonVariant,
  ...systemProps,
  sx
);
