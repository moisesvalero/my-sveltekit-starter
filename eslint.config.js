import js from '@eslint/js';
import ts from 'typescript-eslint';
import svelte from 'eslint-plugin-svelte';
import prettier from 'eslint-config-prettier';

export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  ...svelte.configs['flat/recommended'],
  prettier,
  ...svelte.configs['flat/prettier'],
  {
    files: ['**/*.svelte.ts'],
    languageOptions: {
      parser: ts.parser,
      parserOptions: { parser: ts.parser }
    }
  },
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parserOptions: { parser: ts.parser },
      globals: {
        document: 'readonly',
        window: 'readonly',
        navigator: 'readonly',
        localStorage: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        requestAnimationFrame: 'readonly',
        cancelAnimationFrame: 'readonly',
        IntersectionObserver: 'readonly',
        MouseEvent: 'readonly',
        KeyboardEvent: 'readonly',
        HTMLElement: 'readonly',
        HTMLElementTagNameMap: 'readonly',
        HTMLDivElement: 'readonly',
        HTMLParagraphElement: 'readonly',
        FileList: 'readonly',
        SVGSVGElement: 'readonly',
        console: 'readonly',
        fetch: 'readonly'
      }
    },
    rules: {
      'svelte/no-at-html-tags': 'off',
      'svelte/no-navigation-without-resolve': 'off',
      '@typescript-eslint/no-explicit-any': 'off'
    }
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      globals: { URL: 'readonly', Response: 'readonly', console: 'readonly', fetch: 'readonly' }
    }
  },
  {
    files: ['scripts/**'],
    languageOptions: {
      globals: {
        process: 'readonly',
        console: 'readonly',
        __dirname: 'readonly',
        require: 'readonly',
        module: 'readonly'
      }
    },
    rules: { '@typescript-eslint/no-require-imports': 'off', 'no-undef': 'off' }
  },
  {
    ignores: [
      '.svelte-kit/**',
      'build/**',
      '.output/**',
      '.vercel/**',
      '.netlify/**',
      'node_modules/**',
      'package-lock.json',
      '.agents/**',
      'skills-lock.json'
    ]
  }
];
