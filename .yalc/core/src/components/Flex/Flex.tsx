import styled from '@emotion/styled';
import { compose } from 'styled-system';

import { Base, BaseProps, baseStyleProps } from '../../system';

export type FlexProps = BaseProps;

export const Flex = styled(Base)<FlexProps>(
  {
    display: 'flex',
  },

  compose(...baseStyleProps)
);
