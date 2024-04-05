module.exports = {
  description: "Component Generator",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "component name",
    },
  ],
  actions: [
    {
      type: "add",
      path: "src/components/index.ts",
      skipIfExists: true,
    },
    {
      type: "modify",
      path: "src/components/index.ts",
      templateFile: "generators/component/root-index.ts.hbs",
      pattern: /$/,
    },
    {
      type: "add",
      path: "src/components/{{properCase name}}/index.ts",
      templateFile: "generators/component/index.ts.hbs",
    },
    {
      type: "add",
      path: "src/components/{{properCase name}}/{{properCase name}}.tsx",
      templateFile: "generators/component/Component.tsx.hbs",
    },
  ],
};
