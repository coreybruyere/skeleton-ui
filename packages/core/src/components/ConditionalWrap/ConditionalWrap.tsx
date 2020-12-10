export const ConditionalWrap = ({ children, condition, wrapper }) =>
  condition ? wrapper(children) : children;
