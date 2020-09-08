// import styled from '@emotion/styled';
// import { InterpolationWithTheme } from '@emotion/core';
// import { css, get } from '@theme-ui/css';
// import {
//   compose,
//   space,
//   layout,
//   flexbox,
//   border,
//   position,
//   color,
//   SpaceProps,
//   ColorProps,
//   LayoutProps,
//   FlexboxProps,
//   BorderProps,
//   PositionProps,
// } from 'styled-system';
// import * as CSS from 'csstype';
// // import { createShouldForwardProp } from '@styled-system/should-forward-prop';

// // const shouldForwardProp = createShouldForwardProp([
// //   ...space.propNames,
// //   ...color.propNames,
// // ]);

// const sx = (props: any) => css(props.sx)(props.theme);
// const base = (props: any) => css(props.__css)(props.theme);
// const variant = ({ theme, variant, __themeKey = 'variants' }: any) =>
//   css(get(theme, __themeKey + '.' + variant, get(theme, variant)));

// export type BoxProps = SpaceProps &
//   LayoutProps &
//   FlexboxProps &
//   BorderProps &
//   PositionProps & {
//     color?: CSS.ColorProperty;
//     as?: React.ElementType;
//     variant?: string;
//     css?: InterpolationWithTheme<any>;
//   };

// // export const Box = styled.div<BoxProps>(
// //   {
// //     boxSizing: 'border-box',
// //     minWidth: 0,
// //   },
// //   compose(space, color, layout, flexbox, border, position)
// // );

// export const Box = styled.div<BoxProps>(
//   {
//     boxSizing: 'border-box',
//     margin: 0,
//     minWidth: 0,
//   },
//   base,
//   variant,
//   space,
//   color,
//   sx,
//   props => props.css
// );

// Implement theme-ui : https://github.com/system-ui/theme-ui/blob/master/packages/components/src/Box.js

// import styled from '@emotion/styled';
// import { Box as BaseBox, BoxProps as SpaceColorProps } from 'theme-ui';
// import {
//   compose,
//   layout,
//   flexbox,
//   border,
//   position,
//   LayoutProps,
//   FlexboxProps,
//   BorderProps,
//   PositionProps,
// } from 'styled-system';

// export type BoxProps = SpaceColorProps &
//   LayoutProps &
//   FlexboxProps &
//   BorderProps &
//   PositionProps;

// /**
//  * Extend theme-ui Box with layout, flexbox, border, & position props
//  */
// export const Box = styled(BaseBox)<BoxProps>(
//   {
//     boxSizing: 'border-box',
//     minWidth: 0,
//   },
//   compose(layout, flexbox, border, position)
// );

import styled from '@emotion/styled';
import { css, IntrinsicSxElements, Theme, SxStyleProp } from 'theme-ui';
import { SerializedStyles } from '@emotion/serialize';
import { createShouldForwardProp } from '@styled-system/should-forward-prop';
import {
  space,
  SpaceProps,
  color,
  ColorProps,
  typography,
  TypographyProps,
  layout,
  LayoutProps,
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  background,
  BackgroundProps,
  border,
  BorderProps,
  position,
  PositionProps,
  shadow,
  ShadowProps,
  get,
} from 'styled-system';

/**
 * propNames are typed as string[] | undefined. Undefined is not
 * an iterator so we have to cast propNames to only a string[]
 */
export const shouldForwardProp = createShouldForwardProp([
  ...(space.propNames as string[]),
  ...(color.propNames as string[]),
  ...(typography.propNames as string[]),
  ...(layout.propNames as string[]),
  ...(flexbox.propNames as string[]),
  ...(grid.propNames as string[]),
  ...(background.propNames as string[]),
  ...(border.propNames as string[]),
  ...(position.propNames as string[]),
  ...(shadow.propNames as string[]),
]);

export const systemProps = [
  space,
  color,
  typography,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow,
];

/**
 * sx function to pass the sx prop and theme
 * into Theme UI's css function with parses the values in the
 * prop and serializing them with the theme values
 *
 * @param props any
 */
export function sx(props: {
  theme: Theme;
  sx?: SxStyleProp;
}): SerializedStyles {
  return css(props.sx as any)(props.theme);
}

/**
 * base function allow the __base property to set default values
 * that are read from the theme but can still be overridden by theme variants
 */

export type BaseProps = {
  __base?: SxStyleProp;
};

export function base(props: { theme: Theme } & BaseProps) {
  return css(props.__base as any)(props.theme);
}

/**
 * variant
 *
 * Returns a function that accept's the components
 * props. The variant and theme props are passed into `css`
 * to generate the Emotion css that will be applied to the
 * component
 *
 * Variants are defined in the theme with a key and then variant.
 *
 * {
 *   buttons: {
 *     primary: {
 *       bg: 'primary',
 *       color: 'white',
 *     }
 *   }
 * }
 */
export type VariantProps = {
  variant?: string;
  variantKey?: string;
};

export function variant({
  variant,
  theme,
  variantKey,
}: { theme: Theme } & VariantProps) {
  return css(
    get(
      theme,
      variantKey ? `${variantKey}.${variant}` : (variant as string | number),
      get(theme, variantKey as string | number)
    )
  )(theme);
}

export type SystemProps = SpaceProps &
  ColorProps &
  TypographyProps &
  LayoutProps &
  FlexboxProps &
  GridProps &
  BackgroundProps &
  BorderProps &
  PositionProps &
  ShadowProps;

type IntrinicElements = Omit<IntrinsicSxElements['div'], 'color'>;

export interface BaseProp {
  __base?: SxStyleProp;
}

export type BoxProps = {
  as?: React.ElementType;
} & BaseProp &
  VariantProps &
  SystemProps &
  IntrinicElements;

/**
 * Box primitive component which is the base component for
 * all components in Kodiak
 */
export const Box = styled<'div', BoxProps>('div', {
  shouldForwardProp,
})(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  base,
  variant,
  ...systemProps,
  sx
);
