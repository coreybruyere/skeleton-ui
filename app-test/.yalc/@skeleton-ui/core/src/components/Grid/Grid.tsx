import styled from '@emotion/styled';
import {
  grid as gridStyleProps,
  GridProps as _GridProps,
  compose,
} from 'styled-system';

import { Base, BaseProps, baseStyleProps } from '../../system';

export type GridProps = BaseProps & _GridProps;

export const Grid = styled(Base)<GridProps>(
  {
    display: 'grid',
  },

  compose(...baseStyleProps, gridStyleProps)
);
