import { Box as Box$1, jsx, ThemeProvider as ThemeProvider$1 } from 'theme-ui';
export { Box as Base, Styled } from 'theme-ui';
import { createShouldForwardProp } from '@styled-system/should-forward-prop';
import { space, color, layout, flexbox, position, border, typography, compose, variant, grid } from 'styled-system';
import styled from '@emotion/styled';
import React, { forwardRef } from 'react';
import { css } from '@emotion/css';
import { Global as Global$1 } from '@emotion/react';

var shouldForwardProp = /*#__PURE__*/createShouldForwardProp( /*#__PURE__*/[].concat(space.propNames, color.propNames, layout.propNames, flexbox.propNames, position.propNames));
var baseStyleProps = [layout, flexbox, border, position];
var typographyStyleProps = [typography];

var boxStyleProps = /*#__PURE__*/[].concat(baseStyleProps);
/**
 * Extend theme-ui Box with layout, flexbox, border, & position props
 */

var Box = /*#__PURE__*/styled(Box$1)({
  boxSizing: 'border-box',
  minWidth: 0
}, /*#__PURE__*/compose.apply(void 0, boxStyleProps));

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

var defaultextStyles = {
  fontFamily: 'body',
  fontWeight: 'body',
  lineHeight: 'body',
  color: '#fff',
  mt: 0,
  mb: 0,
  border: 0,
  cursor: 'pointer'
};
var buttonVariants = /*#__PURE__*/variant({
  variants: {
    primary: /*#__PURE__*/_extends({}, defaultextStyles, {
      fontSize: 1,
      bg: 'primary'
    }),
    secondary: /*#__PURE__*/_extends({}, defaultextStyles, {
      fontSize: 1,
      bg: 'secondary'
    }),
    bare: {
      p: 0,
      bg: 'transparent',
      border: 0,
      cursor: 'pointer'
    }
  }
});
var StyledButton = /*#__PURE__*/styled(Box)( /*#__PURE__*/compose.apply(void 0, /*#__PURE__*/typographyStyleProps.concat([buttonVariants])));
var Button = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var children = _ref.children,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'primary' : _ref$variant,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "variant"]);

  return React.createElement(StyledButton, Object.assign({
    as: 'button',
    variant: variant,
    ref: ref
  }, rest), children);
});

var Flex = /*#__PURE__*/styled(Box, {
  shouldForwardProp: shouldForwardProp
})({
  display: 'flex'
});

var textStyleProps = /*#__PURE__*/[].concat(typographyStyleProps, baseStyleProps);
var defaultextStyles$1 = {
  fontFamily: 'body',
  fontWeight: 'body',
  lineHeight: 'body',
  color: 'text',
  mt: 0,
  mb: 0
};
var textVariants = /*#__PURE__*/variant({
  variants: {
    body: /*#__PURE__*/_extends({}, defaultextStyles$1, {
      fontSize: 2
    }),
    caption: /*#__PURE__*/_extends({}, defaultextStyles$1, {
      fontSize: 1
    }),
    label: /*#__PURE__*/_extends({}, defaultextStyles$1, {
      fonts: 'heading',
      fontSize: 1,
      fontWeight: 'medium'
    })
  }
});
var Text = /*#__PURE__*/styled(Box)( /*#__PURE__*/compose.apply(void 0, /*#__PURE__*/textStyleProps.concat([textVariants])));
Text.defaultProps = {
  variant: 'body',
  as: 'p'
};

var StyledLabel = /*#__PURE__*/styled(Text, {
  shouldForwardProp: shouldForwardProp
})( /*#__PURE__*/compose.apply(void 0, textStyleProps));
var Label = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["children"]);

  return React.createElement(StyledLabel, Object.assign({
    as: 'label',
    variant: 'label',
    ref: ref
  }, rest), children);
});

var ConditionalWrap = function ConditionalWrap(_ref) {
  var children = _ref.children,
      condition = _ref.condition,
      wrapper = _ref.wrapper;
  return condition ? wrapper(children) : children;
};

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

var checkboxIconStyles = function checkboxIconStyles(props) {
  return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  cursor: pointer;\n\n  &:hover {\n    color: ", ";\n  }\n\n  input:focus ~ & {\n    color: ", ";\n  }\n\n  input:checked:disabled ~ &,\n  input:disabled ~ & {\n    color: ", ";\n  }\n\n  input:checked ~ & {\n    color: ", ";\n  }\n"])), props.error ? props.theme.colors.error : props.theme.colors.primary, props.error ? props.theme.colors.error : props.theme.colors.primary, props.theme.colors.muted, props.error ? props.theme.colors.error : props.theme.colors.primary);
};

var CheckedIcon = function CheckedIcon(props) {
  return jsx("svg", Object.assign({
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    viewBox: "0 0 32 32"
  }, props), jsx("path", {
    d: "M28 0h-24c-2.2 0-4 1.8-4 4v24c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4v-24c0-2.2-1.8-4-4-4zM14 24.828l-7.414-7.414 2.828-2.828 4.586 4.586 9.586-9.586 2.828 2.828-12.414 12.414z"
  }));
};

var UncheckedIcon = function UncheckedIcon(props) {
  return jsx("svg", Object.assign({
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    viewBox: "0 0 32 32"
  }, props), jsx("path", {
    d: "M28 0h-24c-2.2 0-4 1.8-4 4v24c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4v-24c0-2.2-1.8-4-4-4zM28 28h-24v-24h24v24z"
  }));
};

var Checked = /*#__PURE__*/styled(CheckedIcon)(_templateObject2 || (_templateObject2 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  display: none;\n\n  input:checked ~ & {\n    display: block;\n  }\n\n  ", "\n"])), checkboxIconStyles);
var Unchecked = /*#__PURE__*/styled(UncheckedIcon)(_templateObject3 || (_templateObject3 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  display: block;\n\n  input:checked ~ & {\n    display: none;\n  }\n\n  ", "\n"])), checkboxIconStyles);

var CheckboxIcon = function CheckboxIcon(props) {
  return jsx(React.Fragment, null, jsx(Checked, Object.assign({}, props)), jsx(Unchecked, Object.assign({}, props)));
};

var StyledCheckbox = /*#__PURE__*/styled(Box, {
  shouldForwardProp: shouldForwardProp
})(_templateObject4 || (_templateObject4 = /*#__PURE__*/_taggedTemplateLiteralLoose([""])));
/* Add console warning if label isn't passed. It IS optional but should only be omitted if consumer understands how to use */

var Checkbox = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var label = _ref.label,
      disabled = _ref.disabled,
      error = _ref.error,
      m = _ref.m,
      mt = _ref.mt,
      mr = _ref.mr,
      mb = _ref.mb,
      ml = _ref.ml,
      p = _ref.p,
      pt = _ref.pt,
      pr = _ref.pr,
      pb = _ref.pb,
      pl = _ref.pl,
      rest = _objectWithoutPropertiesLoose(_ref, ["label", "disabled", "error", "m", "mt", "mr", "mb", "ml", "p", "pt", "pr", "pb", "pl"]);

  return jsx(ConditionalWrap, {
    condition: label,
    wrapper: function wrapper(children) {
      return jsx(Label, {
        sx: {
          cursor: 'pointer'
        }
      }, children);
    }
  }, jsx(Flex, {
    alignItems: "center"
  }, jsx(StyledCheckbox, Object.assign({
    as: 'input',
    type: "checkbox",
    ref: ref,
    disabled: disabled
  }, rest, {
    position: "absolute",
    opacity: 0,
    zIndex: -1,
    width: 1,
    height: 1,
    overflow: "hidden"
  })), jsx(CheckboxIcon, {
    as: Box,
    "aria-hidden": "true",
    disabled: disabled,
    error: error,
    m: m,
    mt: mt,
    mr: mr,
    mb: mb,
    ml: ml,
    p: p,
    pt: pt,
    pr: pr,
    pb: pb,
    pl: pl
  }), label && jsx(Box, {
    ml: 1
  }, label)));
});

var _templateObject$1;
var StyledDivider = /*#__PURE__*/styled(Box)(_templateObject$1 || (_templateObject$1 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  overflow: visible;\n  border: none;\n  ", ";\n"])), function (_ref) {
  var direction = _ref.direction;
  return direction === 'vertical' && "\n      display: inline-block;\n      vertical-align: middle;\n    ";
});
var Divider = /*#__PURE__*/forwardRef(function (_ref2, ref) {
  var _ref2$direction = _ref2.direction,
      direction = _ref2$direction === void 0 ? 'horizontal' : _ref2$direction,
      rest = _objectWithoutPropertiesLoose(_ref2, ["direction", "height"]);

  return React.createElement(StyledDivider, Object.assign({
    as: 'hr',
    direction: direction,
    height: direction === 'vertical' ? '16px' : 1,
    width: direction === 'vertical' ? '1px' : 'auto',
    mx: direction === 'vertical' ? 2 : 0,
    my: direction === 'horizontal' ? 2 : 0,
    ref: ref,
    role: "separator",
    "aria-orientation": direction
  }, rest));
});

var Grid = /*#__PURE__*/styled(Box)({
  display: 'grid'
}, /*#__PURE__*/compose(grid));

var defaultHeadingStyles = {
  mt: 0,
  mb: 4,
  fontWeight: 'bold',
  lineHeight: '1.5'
}; // @todo: Implement perfect fifth from https://www.gridlover.net/try

var headingVariants = /*#__PURE__*/variant({
  variants: {
    h1: /*#__PURE__*/_extends({}, defaultHeadingStyles, {
      fontSize: 6
    }),
    h2: /*#__PURE__*/_extends({}, defaultHeadingStyles, {
      fontSize: 5
    }),
    h3: /*#__PURE__*/_extends({}, defaultHeadingStyles, {
      fontSize: 4
    }),
    h4: /*#__PURE__*/_extends({}, defaultHeadingStyles, {
      fontSize: 3
    }),
    h5: /*#__PURE__*/_extends({}, defaultHeadingStyles, {
      fontSize: 2
    }),
    h6: /*#__PURE__*/_extends({}, defaultHeadingStyles, {
      fontSize: 1,
      fontWeight: 'lighter'
    })
  }
});
var Heading = /*#__PURE__*/styled(Box)( /*#__PURE__*/compose.apply(void 0, /*#__PURE__*/typographyStyleProps.concat([headingVariants])));
Heading.defaultProps = {
  variant: 'h1',
  as: 'h1'
};

var _templateObject$2;
var StyledInput = /*#__PURE__*/styled(Box)(_templateObject$2 || (_templateObject$2 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  color: red;\n"])));
var Input = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["children"]);

  return React.createElement(StyledInput, Object.assign({
    as: 'input',
    ref: ref
  }, rest), children);
});

var defaultLinkStyles = {
  fontFamily: 'body',
  fontWeight: 'body',
  lineHeight: 'body',
  color: 'primary'
};
/* Links don't use the Text component since they have unique variants */

var linkVariants = /*#__PURE__*/variant({
  variants: {
    nav: /*#__PURE__*/_extends({}, defaultLinkStyles, {
      fontSize: 3,
      textTransform: 'uppercase'
    }),
    "default": /*#__PURE__*/_extends({}, defaultLinkStyles)
  }
});
var Link = /*#__PURE__*/styled(Box)( /*#__PURE__*/compose.apply(void 0, /*#__PURE__*/typographyStyleProps.concat([linkVariants])));
Link.defaultProps = {
  variant: 'default',
  as: 'a'
};

var _templateObject$3;
var StyledSelect = /*#__PURE__*/styled(Box)(_templateObject$3 || (_templateObject$3 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  /* arrow styles */\n  background: transparent;\n  background-image: url(data:image/svg+xml,%0A%3Csvg%20width%3D%2215px%22%20height%3D%229px%22%20viewBox%3D%22301%2017%2015%209%22%20version%3D%221.1%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20xmlns%3Axlink%3D%22http%3A//www.w3.org/1999/xlink%22%3E%0A%20%20%20%20%3C%21--%20Generator%3A%20Sketch%2042%20%2836781%29%20-%20http%3A//www.bohemiancoding.com/sketch%20--%3E%0A%20%20%20%20%3Cdesc%3ECreated%20with%20Sketch.%3C/desc%3E%0A%20%20%20%20%3Cdefs%3E%3C/defs%3E%0A%20%20%20%20%3Cpolygon%20id%3D%22Combined-Shape%22%20stroke%3D%22none%22%20fill%3D%22%2398A8B3%22%20fill-rule%3D%22evenodd%22%20points%3D%22314.6%2018%20316%2019.3333333%20309%2026%20302%2019.3333333%20303.4%2018%20309%2023.3333333%22%3E%3C/polygon%3E%0A%3C/svg%3E);\n  background-repeat: no-repeat;\n  background-position: calc(100% - 2px) 50%;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n"])));
var Select = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["children"]);

  return React.createElement(StyledSelect, Object.assign({
    as: 'select',
    ref: ref,
    py: 2,
    px: 3,
    border: '1px solid',
    borderColor: 'border'
  }, rest), children);
});

var _templateObject$4;
var StyledTag = /*#__PURE__*/styled(Box)(_templateObject$4 || (_templateObject$4 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  display: inline-block;\n  overflow: visible;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #a7b3be;\n"])));
var Tag = function Tag(_ref) {
  var children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["children"]);

  return React.createElement(StyledTag, Object.assign({}, rest), children);
};

var Global = function Global() {
  return React.createElement(Global$1, {
    styles: function styles(theme) {
      return {
        '*': {
          boxSizing: 'border-box',
          color: theme.colors.text
        }
      };
    }
  });
};

// import { lighten, darken } from 'polished';
// export const fonts = {
//   body:
//     'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
//   heading: 'Georgia, serif',
//   monospace: 'Menlo, monospace',
// };
// export const fontSizes = [
//   '0.625rem',
//   '0.75rem',
//   '1rem',
//   '1.125rem',
//   '1.25rem',
//   '1.5rem',
//   '1.75rem',
//   '2rem',
//   '2.5rem',
//   '3rem',
// ];
// export const fontWeights = {
//   regular: 400,
//   medium: 500,
//   bold: 700,
// };
// export const lineHeights = {
//   solid: 1,
//   title: 1.25,
//   copy: 1.5,
// };
// export const letterSpacings = {
//   default: 'normal',
//   tracked: '0.04em',
// };
// export const space = [0, 4, 8, 16, 32, 64, 128, 256, 512];
// export const sizes = [8, 16, 32, 64, 128, 256, 512, 768, 1024, 1536];
// export const breakpoints = ['40em', '56em', '64em'];
// export default {
//   light: {
//     space,
//     sizes,
//     fonts,
//     fontSizes,
//     fontWeights,
//     lineHeights,
//     letterSpacings,
//     breakpoints,
//     colors: {
//       brand: {
//         primary: '#012E86',
//         secondary: '#0064D9',
//         accent: '#DB7C00',
//         muted: '#C6DAF7',
//       },
//       ui: {
//         primary: '#262626',
//         secondary: '#757575',
//         tertiary: '#F1F1F1',
//         quaternary: '#FFFFFF',
//         disabled: '#DEDEDE',
//         error: '#D0421B',
//         success: '#138000',
//       },
//       bg: {
//         primary: '#FFFFFF',
//         secondary: '#F1F1F1',
//       },
//       text: {
//         primary: '#262626',
//         secondary: '#757575',
//         disabled: '#9C9C9C',
//         inverse: '#FFFFFF',
//         error: '#D0421B',
//         success: '#138000',
//       },
//       highlights: {
//         primaryHighlight: darken(0.1, '#012E86'),
//         primaryExtraHighlight: darken(0.2, '#012E86'),
//         bgHighlight: darken(0.1, '#FFFFFF'),
//       },
//     },
//   },
//   dark: {
//     space,
//     sizes,
//     fonts,
//     fontSizes,
//     fontWeights,
//     lineHeights,
//     letterSpacings,
//     breakpoints,
//     colors: {
//       brand: {
//         primary: '#298DFF',
//         secondary: '#7CAEE8',
//         accent: '#FDB447',
//         muted: '#B7CBEA',
//       },
//       ui: {
//         primary: '#FFFFFF',
//         secondary: '#A1A1A1',
//         tertiary: '#3C3C3C',
//         quaternary: '#262626',
//         disabled: '#242424',
//         error: '#FF4D4D',
//         success: '#1CBD00',
//       },
//       bg: {
//         primary: '#111111',
//         secondary: '#262626',
//       },
//       text: {
//         primary: '#FFFFFF',
//         secondary: '#A1A1A1',
//         disabled: '#525252',
//         inverse: '#262626',
//         error: '#FF4D4D',
//         success: '#1CBD00',
//       },
//       highlights: {
//         primaryHighlight: lighten(0.1, '#298DFF'),
//         primaryExtraHighlight: lighten(0.2, '#298DFF'),
//         bgHighlight: lighten(0.1, '#111111'),
//       },
//     },
//   },
// };
var theme = {
  breakpoints: ['40em', '52em', '64em'],
  space: [0, '.25rem', '.5rem', '1rem', '2rem', '4rem', '8rem', '16rem', '32rem'],
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace'
  },
  fontSizes: ['0.75rem', '1rem', '1.25rem', '1.5rem', '1.75rem', '2.25rem', '2.625rem', '3rem'],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#07c',
    secondary: '#30c',
    muted: '#f6f6f6',
    border: '#a0a0a0',
    warning: 'yellow',
    error: 'red'
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading'
    }
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body'
    },
    h1: {
      variant: 'text.heading',
      fontSize: 5
    },
    h2: {
      variant: 'text.heading',
      fontSize: 4
    },
    h3: {
      variant: 'text.heading',
      fontSize: 3
    },
    h4: {
      variant: 'text.heading',
      fontSize: 2
    },
    h5: {
      variant: 'text.heading',
      fontSize: 1
    },
    h6: {
      variant: 'text.heading',
      fontSize: 0
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit'
      }
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit'
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid'
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid'
    }
  }
};

var merge = /*#__PURE__*/require('deepmerge');

var ThemeProvider = function ThemeProvider(props) {
  var children = props.children,
      theme$1 = props.theme;
  var mergedTheme = theme$1 ? merge(theme, theme$1) : theme;
  return React.createElement(ThemeProvider$1, {
    theme: mergedTheme
  }, children);
};

export { Box, Button, Checkbox, ConditionalWrap, Divider, Flex, Global, Grid, Heading, Input, Label, Link, Select, StyledCheckbox, StyledDivider, StyledInput, StyledLabel, StyledSelect, StyledTag, Tag, Text, ThemeProvider, baseStyleProps, boxStyleProps, shouldForwardProp, textStyleProps, textVariants, theme, typographyStyleProps };
//# sourceMappingURL=core.esm.js.map
