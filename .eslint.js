module.exports = {
  env: {
      node: true,
      browser: true,
      es2021: true,
  },
  extends: [
      'plugin:react/recommended',
      'airbnb-base',
      'prettier',
      'plugin:@next/next/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
      ecmaFeatures: {
          jsx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  rules: {
      'prettier/prettier': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/jsx-filename-extension': [
          1,
          {
              extensions: ['.tsx'],
          },
      ],
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': ['error'],
      'react/react-in-jsx-scope': 'off',
      'import/extensions': [
          'error',
          'ignorePackages',
          {
              ts: 'never',
              tsx: 'never',
          },
      ],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'class-methods-use-this': 'off',
      "import/no-extraneous-dependencies": 'off',
      'camelcase': 'off',
      'no-param-reassign': 'off'
  },
  settings: {
      'import/resolver': {
          typescript: {},
      },
  },
};
