import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL,
  generates: {
    "src/lib/types/generated/wp.ts": {
      plugins: ["typescript"],
    },
  },
};

export default config;
