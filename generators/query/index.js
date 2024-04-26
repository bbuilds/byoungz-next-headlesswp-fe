module.exports = {
  description: "Query Generator",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "query name",
    },
  ],
  actions: [
    {
      type: "add",
      path: "src/lib/queries/index.ts",
      skipIfExists: true,
    },
    {
      type: "modify",
      path: "src/lib/queries/index.ts",
      templateFile: "generators/query/index.ts.hbs",
      pattern: /$/,
    },
    {
      type: "add",
      path: "src/lib/queries/{{camelCase name}}.ts",
      templateFile: "generators/query/query.ts.hbs",
    },
  ],
};
