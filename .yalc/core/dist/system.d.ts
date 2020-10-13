import { Box, BoxProps as SpaceColorProps } from 'theme-ui';
import { LayoutProps, FlexboxProps, BorderProps, PositionProps, TypographyProps as TypeProps } from 'styled-system';
export declare const shouldForwardProp: (prop: string) => boolean;
/**
 * Base level typings, styled props, and component
 */
export declare type BaseProps = SpaceColorProps & LayoutProps & FlexboxProps & BorderProps & PositionProps;
export declare const baseStyleProps: import("styled-system").styleFn[];
export { Box as Base };
/**
 * Core text typings, styled props, and component
 */
export declare type TypographyProps = TypeProps;
export declare const typographyStyleProps: import("styled-system").styleFn[];
