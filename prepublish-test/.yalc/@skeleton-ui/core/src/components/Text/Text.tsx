import styled from '@emotion/styled';
import { compose, variant } from 'styled-system';

import {
  baseStyleProps,
  TypographyProps,
  typographyStyleProps,
} from '../../system';

import { Box, BoxProps } from '../Box';

export type TextProps = {
  variant?: 'body' | 'caption' | 'label';
} & BoxProps &
  TypographyProps;

export const textStyleProps = [...typographyStyleProps, ...baseStyleProps];

const defaultextStyles = {
  fontFamily: 'body',
  fontWeight: 'body',
  lineHeight: 'body',
  color: 'text',
  mt: 0,
  mb: 0,
};

export const textVariants = variant({
  variants: {
    body: {
      ...defaultextStyles,
      fontSize: 2,
    },
    caption: {
      ...defaultextStyles,
      fontSize: 1,
    },
    label: {
      ...defaultextStyles,
      fonts: 'heading',
      fontSize: 1,
      fontWeight: 'medium',
    },
  },
});

export const Text = styled(Box)<TextProps>(
  compose(...textStyleProps, textVariants)
);

Text.defaultProps = {
  variant: 'body',
  as: 'p',
};
