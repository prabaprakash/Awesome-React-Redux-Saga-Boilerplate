module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
    },
    'plugins': [
      'react',
      'json'
    ],
    'extends': ['eslint:recommended', 'plugin:react/recommended'],
    parserOptions: {
      sourceType: 'module',
      ecmaFeatures: {
        'jsx': true
      }
    },
    rules: {
      'comma-dangle': ['error', 'always-multiline'],
      indent: ['error', 2],
      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      'no-unused-vars': ['warn'],
      'no-console': 0,
      'eol-last':["error", "always"],
      'no-trailing-spaces':'error',
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'comma-spacing': ["error", { "before": false, "after": true }],
      'object-curly-spacing': ["error", "always"],
      'key-spacing': ["error", { "beforeColon": false, "afterColon": true }],
      'arrow-body-style': ["error", "as-needed"]
    },
};
