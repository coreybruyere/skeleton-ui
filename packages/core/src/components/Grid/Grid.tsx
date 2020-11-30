import styled from '@emotion/styled';
import {
  grid as gridStyleProps,
  GridProps as _GridProps,
  compose,
} from 'styled-system';

import { Box, BoxProps } from '../../components/Box';

export type GridProps = BoxProps & _GridProps;

export const Grid = styled(Box)<GridProps>(
  {
    display: 'grid',
  },

  compose(gridStyleProps)
);
