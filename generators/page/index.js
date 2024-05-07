module.exports = {
  description: "Page Generator",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "page component name (ex. BlogDetail)",
    },
    {
      type: "input",
      name: "route",
      message: "page route (ex. blog/[slug])",
    },
  ],
  actions: [
    {
      type: "add",
      path: "src/pages/{{nextPathCase route}}.page.tsx",
      templateFile: "generators/page/index.tsx.hbs",
    },
    {
      type: "add",
      path: "src/pages/{{nextPathCase route}}.test.jsx",
      templateFile: "generators/page/index.test.jsx.hbs",
    },
  ],
};
