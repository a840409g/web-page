module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'node': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 12,
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        'eslint-plugin-react'
    ],
    'rules': {
        'indent': [ 2, 4 ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'array-bracket-spacing': [
            'error',
            'always',
        ],
        'block-spacing': [
            'error',
            'always'
        ],
        'brace-style': [
            'error',
            'stroustrup'
        ],
        'comma-spacing': [ 'error' ],
        'key-spacing': [
            'error',
            {
                'afterColon': true
            }
        ],
        'space-before-function-paren': [ 'error' ],
        'space-before-blocks': [ 'error' ],
        'space-in-parens': [ 'error' ],
        'space-infix-ops': [ 'error' ],
        'arrow-spacing': [ 'error' ],
        'prefer-const': [ 'error' ],
        'react/jsx-closing-bracket-location': [ 'error' ],
        'react/jsx-closing-tag-location': [ 'error' ],
        'react/jsx-curly-newline': [ 'error' ],
        'react/jsx-curly-spacing': [ 'error', 'always' ],
        'react/jsx-equals-spacing': [ 'error', 'always' ],
        'react/jsx-space-before-closing': [ 'error' ]
    }
};
