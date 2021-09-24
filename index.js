module.exports = {
  extends: ["typescript-airbnb-prettier", "plugin:@ota-meshi/svelte/recommended"],
  plugins: ["svelte3"],
  ignorePatterns: ['*.cjs, **/*.js'],
  overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
  settings: {
    'svelte3/typescript': () => require('typescript')
  },

}