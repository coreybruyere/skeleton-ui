import React, { forwardRef } from 'react';
import styled from '@emotion/styled';
import { compose } from 'styled-system';

import { shouldForwardProp } from '../../system';
import { Text, TextProps, textStyleProps } from '../../components/Text';

export type StyledLabelProps = React.ComponentPropsWithoutRef<'label'> &
  TextProps;

export const StyledLabel = styled(Text, {
  shouldForwardProp,
})<StyledLabelProps>(compose(...textStyleProps));

export type LabelProps = StyledLabelProps;

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ children, ...rest }, ref) => (
    <StyledLabel as={'label'} ref={ref as any} {...rest}>
      {children}
    </StyledLabel>
  )
);
