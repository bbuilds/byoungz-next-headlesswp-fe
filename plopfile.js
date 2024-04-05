const crypto = require("crypto");
const { pascalCase, pathCase, snakeCase } = require("change-case");
const componentGenerator = require("./generators/component/index");
const pageGenerator = require("./generators/page/index");
const utilGenerator = require("./generators/util/index");

// preserve square brackets, which are valid in next.js page routes
const nextPathCase = (txt) => {
  // find all dynamic parts in square brackets, ex. [id]
  const dynamicParts = Array.from(txt.matchAll(/\[(.*?)\]/g));

  // a map of dynamic part placeholders
  const placeholders = new Map();

  // create a placeholder
  for (const dynamicPart of dynamicParts) {
    // create a placeholder value by md5 hashing the dynamic part
    const placeholder = crypto
      .createHash("md5")
      .update(dynamicPart[0])
      .digest("hex");

    // add the placehoolder and replacement to the map
    placeholders.set(placeholder, `[${snakeCase(dynamicPart[1])}]`);

    // replace the dynamic part with the placeholder in the text
    txt = txt.replace(dynamicPart[0], placeholder);
  }

  // convert the text to path case
  txt = pathCase(txt);

  // replace the placeholders with the original value
  placeholders.forEach((value, placeholder) => {
    txt = txt.replace(placeholder, value);
  });

  return txt;
};

const nextProperCase = (txt) => {
  return pascalCase(
    // remove dynamic parts of the path
    txt.replace(/\[.*?\]/g, "").replace(/\/+/g, " "),
  );
};

module.exports = function (plop) {
  plop.setHelper("nextPathCase", nextPathCase);
  plop.setHelper("nextProperCase", nextProperCase);

  plop.setGenerator("component", componentGenerator);
  plop.setGenerator("page", pageGenerator);
  plop.setGenerator("util", utilGenerator);
};
