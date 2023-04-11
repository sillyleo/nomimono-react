# Installation

```bash
pnpm i @sayaww/nomi-mono"
```

## Usage

```jsx
import "@sayaww/nomi-mono";
import "@sayaww/nomi-mono/style";
import "@fontsource/inter/400.css"; // optional
import "@fontsource/inter/500.css"; // optional
import "@fontsource/inter/700.css"; // optional
```

## With storybook

```jsx
import "../src/style.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";
```

## Development

```bash
turbo dev
#http://localhost:6006
```

## Import themes

- In Tokens Studio in Figma, select `light` theme
- Export from Figma, choose Tools > Export > single file
- Uncheck `all token set`
- check `include parent key`
- save as `Light.json` and put into `figma-output` folder, then repeat for dark theme
- put all files into figma-output folder
- run `turbo build-token`
- Access theme in `src/themes/tokens.json`
- Migrate tokens manually to `tailwind.config.cjs`

## Add a new component

1. Duplicate from "Template" folder in `src/components` with the component name.
2. Add the component name to `src/components/index.tsx`.

## Publish

Update your version in `package.json` manually.

```bash
turbo ship
```

## Publish storybook to Chromatic

```bash
turbo chromatic
```

## Embed Story in website

Get `url` from the [top right corner of a story](https://nomi-workshop.vercel.app/?path=/story/atomic-button--default).
