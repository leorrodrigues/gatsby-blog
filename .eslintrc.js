module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'airbnb',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
        'prettier/react',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'prettier'],
    rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        'react/require-default-props': [0],
        'react/no-unescaped-entities': [
            'error',
            {
                forbid: ['>', '}'],
            },
        ],
        'no-use-before-define': [0],
        '@typescript-eslint/no-use-before-define': [1],
        semi: 'off',
        '@typescript-eslint/semi': 'error',
        'import/no-duplicates': 'off',
        'react/jsx-props-no-spreading': 'off',
        'prettier/prettier': 'error',
        'react/jsx-curly-newline': 'off',
        'react/prop-types': 'off',
        'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
        'import/prefer-default-export': 'off',
        'no-unused-expressions': 'off',
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/explicit-function-return-type': [
            'error',
            {
                allowExpressions: true,
            },
        ],
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                ts: 'never',
                tsx: 'never',
            },
        ],
        'react/jsx-indent': 'off',
        'react/jsx-indent-props': 'off',
        'no-unused-vars': [
            'error',
            {
                vars: 'local',
                args: 'none',
            },
        ],
        'jsx-a11y/anchor-is-valid': [
            'error',
            {
                components: ['Link'],
                specialLink: ['to', 'hrefLeft', 'hrefRight'],
                aspects: ['noHref', 'invalidHref', 'preferButton'],
            },
        ],
    },
    // Configuração para o Gatsby
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
        'import/core-modules': ['react'],
        react: {
            version: 'detect',
        },
    },
    overrides: [
        // Override some TypeScript rules just for .js files
        {
            files: ['*.js'],
            rules: {
                '@typescript-eslint/no-var-requires': 'off', //
            },
        },
    ],
};
