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

import styled from '@emotion/styled';
import { Box as BaseBox, BoxProps as SpaceColorProps } from 'theme-ui';
import { createShouldForwardProp } from '@styled-system/should-forward-prop';
import {
  compose,
  space,
  color,
  layout,
  flexbox,
  border,
  position,
  LayoutProps,
  FlexboxProps,
  BorderProps,
  PositionProps,
} from 'styled-system';

export type BoxProps = SpaceColorProps &
  LayoutProps &
  FlexboxProps &
  BorderProps &
  PositionProps;

export const shouldForwardProp = createShouldForwardProp([
  ...(space.propNames as string[]),
  ...(color.propNames as string[]),
  ...(layout.propNames as string[]),
  ...(flexbox.propNames as string[]),
  ...(position.propNames as string[]),
]);

/**
 * Extend theme-ui Box with layout, flexbox, border, & position props
 */
export const Box = styled(BaseBox)<BoxProps>(
  {
    boxSizing: 'border-box',
    minWidth: 0,
  },
  compose(layout, flexbox, border, position)
);
