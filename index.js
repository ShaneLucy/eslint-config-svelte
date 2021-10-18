module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: [
    "typescript-airbnb-prettier",
    "plugin:@ota-meshi/svelte/recommended",
  ],
  plugins: ["svelte3"],
  ignorePatterns: ["*.cjs, **/*.js"],
  overrides: [
    {
      files: ["*.svelte"],
      processor: "svelte3/svelte3",
      rules: {
        "import/first": "off",
        "import/no-duplicates": "off",
        "import/no-mutable-exports": "off",
        "import/no-unresolved": "off",
      },
    },
  ],
  settings: {
    "svelte3/typescript": () => require("typescript"),
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 12,
    project: "./tsconfig.json",
    extraFileExtensions: [".svelte"],
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  rules: {
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true,
      },
    ],
  },
};
