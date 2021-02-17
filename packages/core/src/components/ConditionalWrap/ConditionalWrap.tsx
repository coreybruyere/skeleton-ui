import * as React from 'react';

type ConditionalWrapProps = {
  condition: any;
  wrapper: React.ReactNode;
};

export const ConditionalWrap: React.FC<ConditionalWrapProps> = ({
  children,
  condition,
  wrapper,
}: any) => (condition ? wrapper(children) : children);
