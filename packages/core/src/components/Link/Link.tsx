import styled from '@emotion/styled';
import { compose, variant } from 'styled-system';

import { TypographyProps, typographyStyleProps } from '../../system';
import { Box, BoxProps } from '../../components/Box';

export type LinkProps = {
  variant: 'default' | 'nav';
} & BoxProps &
  TypographyProps;

const defaultLinkStyles = {
  fontFamily: 'body',
  fontWeight: 'body',
  lineHeight: 'body',
  color: 'primary',
};

/* Links don't use the Text component since they have unique variants */
const linkVariants = variant({
  variants: {
    nav: {
      ...defaultLinkStyles,
      fontSize: 3,
      textTransform: 'uppercase',
    },
    default: {
      ...defaultLinkStyles,
    },
  },
});

export const Link = styled(Box)<LinkProps>(
  compose(...typographyStyleProps, linkVariants)
);

Link.defaultProps = {
  variant: 'default',
  as: 'a',
};
