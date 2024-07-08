import eslintPluginAstro from 'eslint-plugin-astro';
export default [
    ...eslintPluginAstro.configs['all'],
    {
        rules: {
            'astro/no-set-html-directive': 'off',
            'astro/no-exports-from-components': 'error',
            'astro/no-unused-css-selector': 'error',
            'jsx-quotes': ['error', 'prefer-single'],
            'astro/semi': 'off',
            'no-unused-vars': 'error',
            'arrow-parens': ['error', 'as-needed'],
        }
    }
];