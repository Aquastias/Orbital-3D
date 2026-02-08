import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';
import { Linter } from 'eslint';

const globalRules: Linter.RulesRecord = {
  /* TypeScript */
  '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],

  /* React */
  'react/react-in-jsx-scope': 'off',
  'react/prop-types': 'off',
  'react/no-unknown-property': 'off',

  /* Hooks */
  'react-hooks/rules-of-hooks': 'error',
  'react-hooks/exhaustive-deps': 'warn',

  /* a11y */
  'jsx-a11y/no-autofocus': 'off',

  /* Vite Fast Refresh */
  'react-refresh/only-export-components': [
    'warn',
    { allowConstantExport: true },
  ],
};

const testRules: Linter.RulesRecord = {};

export default defineConfig([
  globalIgnores(['dist']),

  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      jsxA11y.flatConfigs.recommended,
      react.configs.flat.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: globalRules,
  },
  {
    files: ['**/*.(spec|test).{ts,tsx}'],
    rules: testRules,
  },
]);
