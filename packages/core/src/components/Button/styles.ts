import styled from '@emotion/styled';

import { Box, BoxProps, shouldForwardProp } from 'components';

export const Button = styled(Box, {
  shouldForwardProp,
})<BoxProps>`
  color: red;
`;
