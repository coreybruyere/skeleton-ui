'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var themeUi = require('theme-ui');
var shouldForwardProp$1 = require('@styled-system/should-forward-prop');
var styledSystem = require('styled-system');
var styled = _interopDefault(require('@emotion/styled'));
var React = require('react');
var React__default = _interopDefault(React);
var core = require('@theme-ui/core');
var core$1 = require('@emotion/core');

var shouldForwardProp = /*#__PURE__*/shouldForwardProp$1.createShouldForwardProp( /*#__PURE__*/[].concat(styledSystem.space.propNames, styledSystem.color.propNames, styledSystem.layout.propNames, styledSystem.flexbox.propNames, styledSystem.position.propNames));
var baseStyleProps = [styledSystem.layout, styledSystem.flexbox, styledSystem.border, styledSystem.position];
var typographyStyleProps = [styledSystem.typography];

/**
 * Extend theme-ui Box with layout, flexbox, border, & position props
 */

var Box = /*#__PURE__*/styled(themeUi.Box)({
  boxSizing: 'border-box',
  minWidth: 0
}, /*#__PURE__*/styledSystem.compose.apply(void 0, baseStyleProps));

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
  color: 'text',
  mt: 0,
  mb: 0
};
var buttonVariants = /*#__PURE__*/styledSystem.variant({
  variants: {
    primary: /*#__PURE__*/_extends({}, defaultextStyles, {
      fontSize: 3
    }),
    secondary: /*#__PURE__*/_extends({}, defaultextStyles, {
      fontSize: 1
    }),
    bare: {
      p: 0
    }
  }
});
var Button = /*#__PURE__*/styled(Box, {
  shouldForwardProp: shouldForwardProp
})( /*#__PURE__*/styledSystem.compose.apply(void 0, /*#__PURE__*/baseStyleProps.concat(typographyStyleProps, [buttonVariants])));

var Button$1 = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'primary' : _ref$variant,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "variant"]);

  return React__default.createElement(Button, Object.assign({
    as: 'button',
    variant: variant,
    ref: ref
  }, rest), children);
});

var Flex = /*#__PURE__*/styled(themeUi.Box)({
  display: 'flex'
}, /*#__PURE__*/styledSystem.compose.apply(void 0, baseStyleProps));

var Grid = /*#__PURE__*/styled(themeUi.Box)({
  display: 'grid'
}, /*#__PURE__*/styledSystem.compose.apply(void 0, /*#__PURE__*/baseStyleProps.concat([styledSystem.grid])));

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  color: red;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Input = /*#__PURE__*/styled(Box, {
  shouldForwardProp: shouldForwardProp
})( /*#__PURE__*/_templateObject());

var Input$1 = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["children"]);

  return React__default.createElement(Input, Object.assign({
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
var linkVariants = /*#__PURE__*/styledSystem.variant({
  variants: {
    nav: /*#__PURE__*/_extends({}, defaultLinkStyles, {
      fontSize: 3,
      textTransform: 'uppercase'
    }),
    "default": /*#__PURE__*/_extends({}, defaultLinkStyles)
  }
});
var Link = /*#__PURE__*/styled(themeUi.Box)( /*#__PURE__*/styledSystem.compose.apply(void 0, /*#__PURE__*/baseStyleProps.concat(typographyStyleProps, [linkVariants])));
Link.defaultProps = {
  variant: 'default',
  as: 'a'
};

var defaultextStyles$1 = {
  fontFamily: 'body',
  fontWeight: 'body',
  lineHeight: 'body',
  color: 'text',
  mt: 0,
  mb: 0
};
var textVariants = /*#__PURE__*/styledSystem.variant({
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
var Text = /*#__PURE__*/styled(themeUi.Box)( /*#__PURE__*/styledSystem.compose.apply(void 0, /*#__PURE__*/baseStyleProps.concat(typographyStyleProps, [textVariants])));
Text.defaultProps = {
  variant: 'body',
  as: 'p'
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
  fontSizes: ['0.625rem', '0.75rem', '1rem', '1.125rem', '1.25rem', '1.5rem', '1.75rem', '2rem', '2.5rem', '3rem'],
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
    muted: '#f6f6f6'
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
  return React__default.createElement(core.ThemeProvider, {
    theme: mergedTheme
  }, children);
};

var Global = function Global() {
  return React__default.createElement(core$1.Global, {
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

Object.defineProperty(exports, 'Base', {
  enumerable: true,
  get: function () {
    return themeUi.Box;
  }
});
Object.defineProperty(exports, 'Styled', {
  enumerable: true,
  get: function () {
    return themeUi.Styled;
  }
});
exports.Box = Box;
exports.Button = Button$1;
exports.Flex = Flex;
exports.Global = Global;
exports.Grid = Grid;
exports.Input = Input$1;
exports.Link = Link;
exports.Text = Text;
exports.ThemeProvider = ThemeProvider;
exports.baseStyleProps = baseStyleProps;
exports.shouldForwardProp = shouldForwardProp;
exports.theme = theme;
exports.typographyStyleProps = typographyStyleProps;
//# sourceMappingURL=core.cjs.development.js.map
