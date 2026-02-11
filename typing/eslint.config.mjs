import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.ts'],
    ignores: ['**/dist/**', '**/node_modules/**', '**/reference/**', `**/firefox-types/**`],

    languageOptions: {
      parser: tsparser,
      sourceType: 'module',
    },

    plugins: {
      '@typescript-eslint': tseslint,
      prettier: prettierPlugin,
    },

    rules: {
      ...tseslint.configs.recommended.rules,
      ...prettierConfig.rules,
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          vars: 'all',
          caughtErrorsIgnorePattern: '(^ignoreError)|^_$',
          argsIgnorePattern: '^_$',
        },
      ],
      'no-console': 'warn',
      '@typescript-eslint/triple-slash-reference': 'off',
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      'prettier/prettier': 'error',
    },
  },
]);
