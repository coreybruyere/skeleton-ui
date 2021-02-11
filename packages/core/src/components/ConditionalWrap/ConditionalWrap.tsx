export const ConditionalWrap = ({ children, condition, wrapper }: any) =>
  condition ? wrapper(children) : children;
