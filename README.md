# BYOUNGZ Headless WP with Next.js (WIP) :construction:

Repository for [byoungz.com](https://byoungz.com/) front-end. This repo is currently a work in progress. 

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

Open up http://localhost:3000 in your browser.

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
npm run

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