![npm](https://img.shields.io/npm/v/eslint-config-devjmetivier.svg)
![npm](https://img.shields.io/npm/dt/eslint-config-devjmetivier.svg)

# Opinionated ESLint Setup

These are my settings for [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) for Eslint

If you like them, awesome. If not, change them up!

## What this does

- Lints JavaScript based on the latest standards
- Fixes issues and formatting errors with Eslint + Prettier
- Lints + Fixes JSX markup

## Installing

You can use eslint globally and/or locally per project.
It's usually best to install this locally once per project, that way you can have project specific settings as well as sync those settings with others working on your project via git.

## Local / Per Project Install

1. If you don't already have a package.json file, create one with `npm init` or `yarn init`.

2. Install everything needed by the config:

   `npm install eslint-config-devjmetivier` or `yarn add eslint-config-devjmetivier`

3. Create a .eslintrc file in the root of your project's directory (it should live where package.json does). Your .eslintrc file should look like this:

   ```json
   {
     "extends": ["devjmetivier"]
   }
   ```

   Tip: You can alternatively put this object in your package.json under the property "eslintConfig":. This makes one less file in your project.

4. You can add two scripts to your package.json to lint and/or fix:

   ```json
   "scripts": {
     "lint": "eslint . --ext .js,.ts,.jsx,.tsx",
     "lint:fix": "eslint . --ext .js,.ts,.jsx,.tsx --fix"
   }
   ```

5. Now you can manually lint your code by running `npm run lint` and fix all fixable issues with `npm run lint:fix`. You probably want your editor to do this automagically, though.
