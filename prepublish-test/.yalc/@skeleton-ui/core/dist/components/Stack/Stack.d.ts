import React from 'react';
import { GridProps } from '../Grid';
export declare type StyledStackProps = GridProps;
export declare const StyledStack: import("@emotion/styled").StyledComponent<any, {}, {}>;
export declare type StackProps = StyledStackProps & {
    children: React.ReactNode;
    space: any;
};
export declare const Stack: React.FC<StackProps>;
