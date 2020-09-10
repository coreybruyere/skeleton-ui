import styled from '@emotion/styled';

import { Box, BoxProps, shouldForwardProp } from '..';

export const Input = styled(Box, {
  shouldForwardProp,
})<BoxProps>`
  color: red;
`;
