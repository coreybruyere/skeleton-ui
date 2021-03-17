# Skeleton UI Design System Kit ☠️💀

A starter _skeleton_ that gives **you** the _bare bones_ needed to get up and running with building design systems.

Skeleton UI is built with React, Theme UI, styled-system, and emotion and structured as a monorepo using Lerna.

This design system kit comes with a minimal, basic theme which you can configure as you please. This gives you the power to use it as a starting point for your next design system **or** you can consume it in your next project as starter component library to build out components.

## Usage

### Clone and make your own

Skeleton UI is a starter, _bare bones_ template that enables you to build, theme, and design components as you'd like. Use Skeleton UI as a starting point for your new design system.

TODO: Add instructions

### Install as package

TODO: Add instructions

<!-- # Typescript reproduction issue

1. Clone project
2. `npm i` in root (or lerna bootstrap)
3. `cd` into `packages/core` and `npm i`
4. install yalc globally (skip steps 4 - 5 if just using current version to see Ts errors) `npm/yarn install -g yalc`
5. In `packages/core` run `yalc publish`
6. `cd...` up and into `prepublish-test`
7. `yalc add @skeleton-ui/core` and `npm i`
8. Open `prepublish-test/src/App.tsx`
9. View error when hovering over `Button` component on line 11.
10. In `prepublish-test/node_modules/@skeleton-ui/dist/components/Button/Button.d.ts` you'll see the compiled defintion. In `prepublish-test/node_modules/@skeleton-ui/src/components/Button` you'll see the Button component. Its there I've been making changes and manually checking TS errors inside of App.tsx -->

## Contributing

See [Contributing documentation](/CONTRIBUTING.md) for installation and development instruction.

<!-- ## Installation

`@skeleton-ui/core` is available as a name-spaced npm package. Install the `@skeleton-ui/core` package and its dependencies.

```bash
npm install `@skeleton-ui/core` styled-components react react-dom
```

Optionally install `@hart/haiku-icons` if you're in need of any of Haiku's SVG icons.

```bash
npm install @hart/haiku-icons
``` -->

## To-do:

- Document yalc process in CONTRIBUTING
- Figure out Props of issue in MDX files
- Update README in individual packages
- Document usage (Use as template or import)
- Add simple icon component
- Add context provider for alert state
- Document when to use styled prop functions
