import styled from '@emotion/styled';
import { compose } from 'styled-system';

import {
  Base,
  BaseProps,
  baseStyleProps,
  TypographyProps,
  typographyStyleProps,
  shouldForwardProp,
} from '../../system';

export type StyledCheckboxProps = React.ComponentPropsWithoutRef<'input'> &
  BaseProps &
  TypographyProps;

export const Checkbox = styled(Base, {
  shouldForwardProp,
})<StyledCheckboxProps>(compose(...baseStyleProps, ...typographyStyleProps));
