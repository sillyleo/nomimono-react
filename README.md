# Nomimono

An experimental component library. Please don't use it in production.

## Usage

Go to [Nomimono Docs](https://nomimono.vercel.app)

## What's inside?

This turborepo uses [pnpm](https://pnpm.io) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `docs`: this documentation website built with Nextra
- `web`: another [Next.js](https://nextjs.org/) app for testing components
- `ui`: the component library for npm package
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Build

To build all apps and packages, run the following command:

```zsh
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```zsh
pnpm dev
```

### Publish

To publish the component library:

```zsh
pnpm ship
```
