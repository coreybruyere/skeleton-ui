import { TypographyProps } from '../../system';
import { BoxProps } from '../Box';
export declare type HeadingProps = {
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
} & BoxProps & TypographyProps;
export declare const Heading: import("@emotion/styled").StyledComponent<any, {}, {}>;
