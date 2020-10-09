import styled from '@emotion/styled';
import { compose, variant } from 'styled-system';

import { StyledButtonProps } from './Button';
import {
  shouldForwardProp,
  baseStyleProps,
  typographyStyleProps,
} from '../../system';
import { Box } from '../../components';

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
      fontSize: 3,
    },
    secondary: {
      ...defaultextStyles,
      fontSize: 1,
    },
    bare: {
      p: 0,
    },
  },
});

export const Button = styled(Box, {
  shouldForwardProp,
})<StyledButtonProps>(
  compose(...baseStyleProps, ...typographyStyleProps, buttonVariants)
);
