import React from 'react';
import { BoxProps } from '../Box';
export declare type StyledTagProps = BoxProps;
export declare const StyledTag: import("@emotion/styled").StyledComponent<any, {}, {}>;
export declare type TagProps = StyledTagProps & {
    children: React.ReactNode;
};
export declare const Tag: React.FC<TagProps>;
