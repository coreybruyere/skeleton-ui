import { TypographyProps } from '../../system';
import { BoxProps } from '../Box';
export declare type TextProps = {
    variant?: 'body' | 'caption' | 'label';
} & BoxProps & TypographyProps;
export declare const textStyleProps: import("styled-system").styleFn[];
export declare const textVariants: (...args: any[]) => any;
export declare const Text: import("@emotion/styled").StyledComponent<any, {}, {}>;
