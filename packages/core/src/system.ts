import { Box, BoxProps as SpaceColorProps } from 'theme-ui';
import { createShouldForwardProp } from '@styled-system/should-forward-prop';
import {
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

export type BaseProps = SpaceColorProps &
  LayoutProps &
  FlexboxProps &
  BorderProps &
  PositionProps;

export const baseStyleProps = [layout, flexbox, border, position];

export { Box as Base };

export const shouldForwardProp = createShouldForwardProp([
  ...(space.propNames as string[]),
  ...(color.propNames as string[]),
  ...(layout.propNames as string[]),
  ...(flexbox.propNames as string[]),
  ...(position.propNames as string[]),
]);
