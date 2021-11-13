module.exports = {
    env: {
        node: true,
        'vue/setup-compiler-macros': true
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'plugin:vue/vue3-strongly-recommended',
        'plugin:vue/vue3-essential',
        "plugin:vue/base",
        '@vue/typescript',
        'prettier'
    ],
    rules: {
        // override/add rules settings here, such as:
    }
}