# ESLint-Config

Config-ESLint is a comprehensive ESLint configuration package that helps you maintain code quality and consistency in your JavaScript and TypeScript projects. This package comes with a predefined set of rules and plugins to streamline your ESLint setup.

<div align="center">

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![Visits Badge](https://badges.pufler.dev/visits/BasheerRajeh/eslint-config-js)](https://github.com/BasheerRajeh/eslint-config-js)
[![Created Badge](https://badges.pufler.dev/created/BasheerRajeh/eslint-config-js)](https://www.npmjs.com/package/config-eslint)
[![Updated Badge](https://badges.pufler.dev/updated/BasheerRajeh/eslint-config-js)](https://www.npmjs.com/package/config-eslint)

</div>

## Features

-   A well-rounded ESLint configuration with carefully selected rules and plugins.
-   Supports JavaScript and TypeScript projects.
-   Optimized for React development.
-   Preconfigured for accessibility (a11y), security, and code formatting (Prettier).
-   Ready to use without the need for additional plugin installations.

## Installation

You can install ESLint-Config using npm:

```bash
npm install -D eslint-config-rajeh
```

## Usage

To use Config-ESLint, extend its configuration in your ESLint configuration file (e.g., `.eslintrc.js`):

```js
module.exports = {
    extends: [
        // Other eslint plugin
        "rajeh",
    ],
    // Parse Options
    parserOptions: {
        project: "./tsconfig.json",
        ecmaVersion: "latest",
    },
};
```

This simple configuration setup will apply all the recommended rules and plugins included in Config-ESLint.

## Dependencies

Config-ESLint includes a wide range of ESLint dependencies, which are already bundled and configured for you. Here's a list of some of the key dependencies:

-   `eslint:recommended`
-   `plugin:react/recommended`
-   `plugin:react-hooks/recommended`
-   `plugin:jsx-a11y/strict`
-   `plugin:@typescript-eslint/strict`
-   `plugin:@typescript-eslint/recommended`
-   `plugin:@typescript-eslint/recommended-requiring-type-checking`
-   `plugin:@typescript-eslint/eslint-recommended`
-   `plugin:@typescript-eslint/stylistic`
-   `plugin:security/recommended`
-   `plugin:prettier/recommended`
-   `plugin:tailwindcss/recommended`
-   `plugin:github/recommended`
-   `plugin:github/react`
-   `plugin:github/typescript`
-   `plugin:sonarjs/recommended`
-   `plugin:unicorn/recommended`
-   `simple-import-sort`
-   `unused-imports`

You do not need to install these dependencies separately; they are already bundled and configured within Config-ESLint.

With Config-ESLint in your project, you can focus on writing high-quality code without worrying about ESLint setup complexities. Enjoy coding!

## Authors

-   [@BasheerRajeh](https://github.com/BasheerRajeh)

## License

This project is licensed under the [MIT License](LICENSE).
