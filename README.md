# BYOUNGZ Headless WP with Next.js (WIP) :construction:

Repository for [byoungz.com](https://byoungz.com/) front-end. This repo is currently a work in progress. 

## Supported Features

- Automatic GraphQL code generation
- Light/Dark mode
- Built in A11y checks
- Code generators for utils, pages, components
- Vitest unit testing

## Getting Started

### 1. Clone the repo

```bash
git clone git@github.com:bbuilds/byoungz-next-headlesswp-fe.git
```

### 2. Install dependencies

```bash
npm i
```
### 3. Create a `.env.local` file

```bash
cp .env.example .env.local
```


### 4. Run the development server

```bash
npm run dev
```

Open up http://localhost:4444 in your browser.

## Testing

To trigger the unit tests, run:

```shell
npm run test
```

## Checking linting

```shell
npm run lint
```

And to auto-fix:

```shell
npm run fix
```

## Code generation

### Generate new code

```shell
npm run generate component MyComponent
```

```shell
npm run generate page Blog blog
```

```shell
npm run generate page BlogDetail blog/[id]
```

```shell
npm run generate util isNumeric
```

### Generate WP Graphql Types

This command will fetch content types from your `NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL` listed in the `.env.local` file and generate types for them.

*This command will only work if you have a running WordPress instance with the WPGraphQL plugin installed and have enabled public introspection.*

**Enable GraphQL Introspection**

In the WordPress admin sidebar of your environment, head to GraphQL > Settings. Make sure the Enable Public Introspection option is checked. 

```shell
npm run codegen:wp
```