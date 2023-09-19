module.exports = {
    env: {
        browser: true,
        es6: true,
        node: ture
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/strict',
        'plugin:@typescript-eslint/strict',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/stylistic',
        'plugin:security/recommended',
        'plugin:prettier/recommended',
        'plugin:tailwindcss/recommended',
        'plugin:github/recommended',
        'plugin:github/react',
        'plugin:github/typescript',
        'plugin:sonarjs/recommended',
        'plugin:unicorn/recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'simple-import-sort',
        'unused-imports'
    ],
    settings: {
        react: {
            version: 'detect'
        }
    }, rules: {
        // Eslint
        quotes: [
            2,
            'single',
            {
                avoidEscape: true
            }
        ],
        semi: [2, 'never'],

        // Import sorting
        'simple-import-sort/imports': 2,
        'simple-import-sort/exports': 2,

        // Typescript
        '@typescript-eslint/no-unused-vars': 2,
        '@typescript-eslint/no-empty-function': 2,
        '@typescript-eslint/no-namespace': 0,
        '@typescript-eslint/no-misused-promises': 0,
        '@typescript-eslint/no-unsafe-call': 0,
        '@typescript-eslint/no-unsafe-assignment': 0,
        '@typescript-eslint/no-unsafe-member-access': 0,
        '@typescript-eslint/no-namespace': 0,
        '@typescript-eslint/consistent-type-definitions': [2, 'type'],

        // Unicorn
        'unicorn/prevent-abbreviations': 0,
        'unicorn/no-null': 0,
        'unicorn/no-await-expression-member': 0,

        // i18n text
        'i18n-text/no-en': 0,

        // Eslint comments
        'eslint-comments/no-use': [
            2,
            {
                allow: [
                    'eslint-disable',
                    'eslint-disable-line',
                    'eslint-disable-next-line'
                ]
            }
        ],

        // Import
        'import/no-namespace': 0,

        // React
        'react/prop-types': 0,
        'react/react-in-jsx-scope': 0,
        'react/no-array-index-key': 2,
        'react/button-has-type': 2,
        'react/self-closing-comp': [2, { component: true, html: true }],

        // Unused import
        'unused-imports/no-unused-imports': 2,
        'unused-imports/no-unused-vars': [
            2,
            {
                vars: 'all',
                varsIgnorePattern: '^_',
                args: 'after-used',
                argsIgnorePattern: '^_'
            }
        ],

        // Tailwind
        "tailwindcss/no-custom-classname": 1,
    },
}