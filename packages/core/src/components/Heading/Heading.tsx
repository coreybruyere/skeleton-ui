import styled from '@emotion/styled';
import { compose, variant } from 'styled-system';

import { TypographyProps, typographyStyleProps } from '../../system';
import { Box, BoxProps } from '../Box';

export type HeadingProps = {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
} & BoxProps &
  TypographyProps;

const defaultHeadingStyles = {
  mt: 0,
  mb: 4,
  fontWeight: 'bold',
  lineHeight: '1.5',
};

// @todo: Implement perfect fifth from https://www.gridlover.net/try
const headingVariants = variant({
  variants: {
    h1: {
      ...defaultHeadingStyles,
      fontSize: 6,
    },
    h2: {
      ...defaultHeadingStyles,
      fontSize: 5,
    },
    h3: {
      ...defaultHeadingStyles,
      fontSize: 4,
    },
    h4: {
      ...defaultHeadingStyles,
      fontSize: 3,
    },
    h5: {
      ...defaultHeadingStyles,
      fontSize: 2,
    },
    h6: {
      ...defaultHeadingStyles,
      fontSize: 1,
      fontWeight: 'lighter',
    },
  },
});

export const Heading = styled(Box)<HeadingProps>(
  compose(...typographyStyleProps, headingVariants)
);

Heading.defaultProps = {
  variant: 'h1',
  as: 'h1',
};
