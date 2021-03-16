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

/*
Red      #FF0000  rgb(255, 0, 0)   danger  (alert, button)
Maroon   #800000  rgb(128, 0, 0)   danger hover (button)
Yellow   #FFFF00  rgb(255, 255, 0) warning (alert)
Olive    #808000  rgb(128, 128, 0) 
Green    #008000  rgb(0, 128, 0)   success (alert)
Blue     #0000FF  rgb(0, 0, 255)   primary
Teal     #008080  rgb(0, 128, 128) secondary
Navy     #000080  rgb(0, 0, 128)   primary hover (link, button)
Fuchsia  #FF00FF  rgb(255, 0, 255) 
Purple   #800080  rgb(128, 0, 128) visited

Black (light black)
Grays 3 colors (default button, bg, )
*/

import { Theme } from 'theme-ui';

const makeTheme = <T extends Theme>(t: T): T => t;

export const theme = makeTheme({
  breakpoints: [0, '40em', '52em', '64em'],
  space: [
    0,
    '.25rem',
    '.5rem',
    '1rem',
    '2rem',
    '4rem',
    '8rem',
    '16rem',
    '32rem',
  ],
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [
    0,
    '0.75rem', // 12px
    '0.875rem', // 14px
    '1rem', // 16px
    '1.25rem', // 20px
    '1.5rem', // 24px
    '1.75rem', // 28px
    '2.25rem', // 36px
    '2.625rem', // 42px
    '3rem', // 48px
  ],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: '#141414', // Light Black
    background: '#FFFFFF', // White
    primary: '#0000FF', // Blue
    secondary: '#008080', // Teal
    muted: '#F6F6F6', // Light Gray
    border: '#A0A0A0', // Mid Gray
    warning: '#FFFF00', // Yellow
    error: '#FF0000', // Red
    visited: '#800080', // Purple
  },
  radii: [
    0,
    '0.0625rem', // 1px
    '0.125rem', // 2px
    '0.1875rem', // 3px
  ],
  borderWidths: [
    0,
    '0.0625rem', // 1px
    '0.125rem', // 2px
    '0.1875rem', // 3px
  ],
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
  },

  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    h1: {
      variant: 'text.heading',
      fontSize: 5,
    },
    h2: {
      variant: 'text.heading',
      fontSize: 4,
    },
    h3: {
      variant: 'text.heading',
      fontSize: 3,
    },
    h4: {
      variant: 'text.heading',
      fontSize: 2,
    },
    h5: {
      variant: 'text.heading',
      fontSize: 1,
    },
    h6: {
      variant: 'text.heading',
      fontSize: 0,
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
  },
});
