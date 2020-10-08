import styled from '@emotion/styled';
import { compose, variant } from 'styled-system';

import { shouldForwardProp } from '../../system';
import { Text, TextProps } from '../../components';

const defaultextStyles = {
  fontFamily: 'body',
  fontWeight: 'body',
  lineHeight: 'body',
  color: 'text',
  mt: 0,
  mb: 0,
};

const buttonVariants = variant({
  variants: {
    primary: {
      ...defaultextStyles,
      fontSize: 2,
    },
    secondary: {
      ...defaultextStyles,
      fontSize: 1,
    },
    bare: {
      padding: 0,
    },
  },
});

export const Button = styled(Text, {
  shouldForwardProp,
})<TextProps>(compose(buttonVariants));
