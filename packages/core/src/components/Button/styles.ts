import styled from '@emotion/styled';

import { BaseProps, shouldForwardProp } from '../../system';
import { Box } from '../../components';

export const Button = styled(Box, {
  shouldForwardProp,
})<BaseProps>`
  color: red;
`;
