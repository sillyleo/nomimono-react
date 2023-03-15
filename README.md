# Nomimono

An experimental component library. Please don't use it in production.

## Usage

- Docs: http://nomimono.vercel.app
- Workshop: http://nomi-workshop.vercel.app

## What's inside?

This turborepo uses [pnpm](https://pnpm.io) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `docs`: this documentation website built with Nextra
- `workshop`: component playground powered by Storybook
- `web`: another [Next.js](https://nextjs.org/) app for testing components
- `ui`: the component library for npm package
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

### Develop

To develop all apps and packages, run the following command:

```zsh
turbo dev
```

This will run `workshop`, `ui`, and `web` for developing compoennts.

### Publish

To publish the component library:

```zsh
turbo ship
```
