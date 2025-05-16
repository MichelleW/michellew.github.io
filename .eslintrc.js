module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'react-app',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript'
    ],
    plugins: ['@typescript-eslint', 'import'],
    rules: {
        '@typescript-eslint/no-unused-expressions': ['warning', {
            allowShortCircuit: true,
            allowTernary: true,
            allowTaggedTemplates: true
        }]
    },
    settings: {
        'import/resolver': {
            'node': {
                'extensions': ['.js', '.jsx', '.ts', '.tsx']
            }
        }
    },
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    }
}; 