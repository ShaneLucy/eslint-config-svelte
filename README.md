# Eslint Airbnb Typescript & Prettier Configuration
An eslint configuration that integrates the following into one package for easy installation and setup: 
- [eslint-config-typescript-airbnb-prettier](https://www.npmjs.com/package/eslint-config-typescript-airbnb-prettier)
- [@ota-meshi/eslint-plugin-svelte](https://ota-meshi.github.io/eslint-plugin-svelte/)
- [eslint-plugin-svelte3](https://preview.npmjs.com/package/eslint-plugin-svelte3)

## Assumptions
1. You have typescript installed
1. You have a ```tsconfig.json``` in your project root
1. You have a top level public directory for static assets
1. You have installed a version of Node greater than 8

## Installation 
*Note this will also install eslint, prettier, prettier-plugin-svelte & @typescript-eslint/eslint-plugin*  
Install with npm   
```bash
npm install --save-dev eslint-config-typescript-airbnb-prettier-svelte
```  

## Setup
Create a .eslintrc.js file in your project root
```bash
touch .eslintrc.js
```

Paste the following into ```.eslintrc.js```
```javascript
module.exports = {
  extends: "typescript-airbnb-prettier-svelte",
};
```

Add the following commands into the scripts object in your ```package.json```
```json
"lint": "prettier --write --plugin-search-dir=. .  && eslint src/**",
"lint-fix": "prettier --write --plugin-search-dir=. .  && eslint src/** --fix"
```

An example scripts object might look like this
```json
"scripts": {
  "dev": "vite",
  "build": "tsc && vite build",
  "serve": "vite preview",
  "lint": "prettier --write --plugin-search-dir=. .  && eslint src/**",
  "lint-fix": "prettier --write --plugin-search-dir=. .  && eslint src/** --fix"
},
```

In your ```tsconfig.json``` add an excludes key
```json
"exclude": ["node_modules/*", "public/*", "tsconfig.json"]
```

Create an ```.eslintignore``` in your project root
```
touch .eslintignore
```

Paste the following into ```.eslintignore``` 
```
.eslintrc.js
public/**
node_modules/**
```

## Usage
```bash
npm run lint
```
Or to make eslint auto fix any issues it's capable of fixing
```bash
npm run lint-fix
```

## Usage
```bash
npm run lint
```

## Customisation
This eslint config can be [altered and extended](https://eslint.org/docs/user-guide/configuring/) by editing ```.eslintrc.js```

Prettier can be [altered and extended](https://prettier.io/docs/en/options.html) by creating and modifying ```.prettierrc``` 