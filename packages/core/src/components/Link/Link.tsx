import styled from '@emotion/styled';
import { compose, variant } from 'styled-system';

import {
  Base,
  BaseProps,
  baseStyleProps,
  TypographyProps,
  typographyStyleProps,
} from '../../system';

export type LinkProps = {
  variant: 'default' | 'nav';
} & BaseProps &
  TypographyProps;

const defaultLinkStyles = {
  fontFamily: 'body',
  fontWeight: 'body',
  lineHeight: 'body',
  color: 'primary',
};

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

export const Link = styled(Base)<LinkProps>(
  compose(...baseStyleProps, ...typographyStyleProps, linkVariants)
);

Link.defaultProps = {
  variant: 'default',
  as: 'a',
};
