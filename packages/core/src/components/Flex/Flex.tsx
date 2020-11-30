import styled from '@emotion/styled';

import { shouldForwardProp } from '../../system';
import { Box, BoxProps } from '../Box';

export type FlexProps = BoxProps;

export const Flex = styled(Box, { shouldForwardProp })<FlexProps>({
  display: 'flex',
});
