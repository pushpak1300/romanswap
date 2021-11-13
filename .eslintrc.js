module.exports = {
    env: {
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'plugin:vue/vue3-strongly-recommended',
        'plugin:vue/vue3-essential',
        "plugin:vue/base",
        "prettier"
    ],
    rules: {
        // override/add rules settings here, such as:
        'vue/no-unused-vars': 'error',
    }
}