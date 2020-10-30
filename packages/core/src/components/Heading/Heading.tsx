import styled from '@emotion/styled';
import { compose, variant } from 'styled-system';

import {
  Base,
  BaseProps,
  baseStyleProps,
  TypographyProps,
  typographyStyleProps,
} from '../../system';

export type HeadingProps = {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
} & BaseProps &
  TypographyProps;

const defaultHeadingStyles = {
  mt: 0,
  mb: 4,
};

const headingVariants = variant({
  variants: {
    h1: {
      ...defaultHeadingStyles,
    },
    h2: {
      ...defaultHeadingStyles,
    },
    h3: {
      ...defaultHeadingStyles,
    },
    h4: {
      ...defaultHeadingStyles,
    },
    h5: {
      ...defaultHeadingStyles,
    },
    h6: {
      ...defaultHeadingStyles,
    },
  },
});

export const Heading = styled(Base)<HeadingProps>(
  compose(...baseStyleProps, ...typographyStyleProps, headingVariants)
);

Heading.defaultProps = {
  variant: 'h1',
  as: 'h1',
};
