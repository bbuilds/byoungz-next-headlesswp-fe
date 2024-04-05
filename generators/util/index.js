module.exports = {
  description: "Util Generator",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "util name",
    },
  ],
  actions: [
    {
      type: "add",
      path: "src/lib/utils/index.ts",
      skipIfExists: true,
    },
    {
      type: "modify",
      path: "src/lib/utils/index.ts",
      templateFile: "generators/util/index.ts.hbs",
      pattern: /$/,
    },
    {
      type: "add",
      path: "src/lib/utils/{{camelCase name}}.ts",
      templateFile: "generators/util/util.ts.hbs",
    },
    {
      type: "add",
      path: "src/lib/utils/{{camelCase name}}.test.js",
      templateFile: "generators/util/util.test.js.hbs",
    },
  ],
};
