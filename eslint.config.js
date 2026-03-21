import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    files: ['js/**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        window:                'readonly',
        document:              'readonly',
        localStorage:          'readonly',
        requestAnimationFrame: 'readonly',
        cancelAnimationFrame:  'readonly',
        FileReader:            'readonly',
        alert:                 'readonly',
        console:               'readonly',
        performance:           'readonly',
        openModal:             'writable',
        closeModal:            'writable',
        parseInt:              'readonly',
        Math:                  'readonly',
        JSON:                  'readonly',
        CustomEvent:           'readonly',
        Event:                 'readonly',
      },
    },
    rules: {
      'no-eval':              'error',
      'no-implied-eval':      'error',
      'no-new-func':          'error',
      'no-script-url':        'error',
      'no-unused-vars':       ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      'eqeqeq':               'error',
      'no-debugger':          'error',
      'no-var':               'error',
      'prefer-const':         'warn',
      'no-duplicate-imports': 'error',
      'no-console':           ['warn', { allow: ['warn', 'error'] }],
    },
  },
];
