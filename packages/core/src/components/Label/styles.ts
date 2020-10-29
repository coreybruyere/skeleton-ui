import styled from '@emotion/styled';
import { compose } from 'styled-system';

import { shouldForwardProp } from '../../system';
import { Text, TextProps, textStyleProps } from '../Text';

export type StyledLabelProps = React.ComponentPropsWithoutRef<'label'> &
  TextProps;

export const Label = styled(Text, {
  shouldForwardProp,
})<StyledLabelProps>(compose(...textStyleProps));

Label.defaultProps = {
  variant: 'label',
};
