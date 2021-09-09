module.exports = {
    env: {
        browser: true,
        node: true,
        es2021: true
    },
    extends: [
        'eslint:recommended',
        "plugin:vue/vue3-recommended",
        'prettier',
        'prettier/vue',
    ],
    parserOptions: {
        "ecmaVersion": 2021
    },
    plugins: ['vue'],
    rules: {
        indent: ['error', 4],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'never'],
        'prettier/prettier': ['error'],
        'vue/no-multiple-template-root': 'off'
    }
}