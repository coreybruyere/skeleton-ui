import styled from '@emotion/styled';

import { Box, BoxProps, shouldForwardProp } from '../';

export const Button = styled(Box, {
  shouldForwardProp,
})<BoxProps>`
  color: red;
`;
