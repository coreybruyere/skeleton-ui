import styled from '@emotion/styled';
import { compose } from 'styled-system';

import { Base, BaseProps, baseStyleProps } from '../../system';

export type BoxProps = BaseProps;

/**
 * Extend theme-ui Box with layout, flexbox, border, & position props
 */
export const Box = styled(Base)<BoxProps>(
  {
    boxSizing: 'border-box',
    minWidth: 0,
  },

  compose(...baseStyleProps)
);
