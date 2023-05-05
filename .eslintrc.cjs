// eslint-disable-next-line no-undef
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/strict',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'jsx-a11y', 'import'],
  root: true,
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
    project: './tsconfig.lint.json',
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],

    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },

  rules: {
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'always',
        bracketSpacing: true,
        bracketSameLine: false,
        printWidth: 80,
        singleQuote: true,
        trailingComma: 'es5',
        useTabs: false,
        quoteProps: 'as-needed',
      },
    ],
    '@typescript-eslint/adjacent-overload-signatures': ['error'],
    '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          String: {
            message: 'Use `string` instead.',
            fixWith: 'string',
          },
          Number: {
            message: 'Use `number` instead.',
            fixWith: 'number',
          },
          Boolean: {
            message: 'Use `boolean` instead.',
            fixWith: 'boolean',
          },
          Symbol: {
            message: 'Use `symbol` instead.',
            fixWith: 'symbol',
          },
          Object: {
            message:
              'The `Object` type is mostly the same as `unknown`. You probably want `Record<string, unknown>` instead. See https://github.com/typescript-eslint/typescript-eslint/pull/848',
            fixWith: 'Record<string, unknown>',
          },
          '{}': {
            message:
              'The `{}` type is mostly the same as `unknown`. You probably want `Record<string, unknown>` instead.',
            fixWith: 'Record<string, unknown>',
          },
          object: {
            message:
              'The `object` type is hard to use. Use `Record<string, unknown>` instead. See: https://github.com/typescript-eslint/typescript-eslint/pull/848',
            fixWith: 'Record<string, unknown>',
          },
          Function: 'Use a specific function type instead, like `() => void`.',
        },
      },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports' },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'typeParameter',
        format: ['PascalCase'],
        prefix: ['T', 'K'],
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: false,
        },
      },
    ],
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'allow-as-parameter',
      },
    ],
    '@typescript-eslint/member-ordering': [
      'error',
      {
        default: [
          'public-static-field',
          'protected-static-field',
          'private-static-field',

          'public-instance-field',
          'protected-instance-field',
          'private-instance-field',

          'public-abstract-field',
          'protected-abstract-field',

          'public-field',
          'protected-field',
          'private-field',

          'static-field',
          'instance-field',
          'abstract-field',

          'field',

          'constructor',

          'public-static-method',
          'protected-static-method',
          'private-static-method',

          'public-instance-method',
          'protected-instance-method',
          'private-instance-method',

          'public-abstract-method',
          'protected-abstract-method',

          'public-method',
          'protected-method',
          'private-method',

          'static-method',
          'instance-method',
          'abstract-method',

          'method',
          'signature',
        ],
      },
    ],
    '@typescript-eslint/no-array-constructor': ['error'],
    '@typescript-eslint/no-empty-interface': ['error'],
    '@typescript-eslint/no-misused-new': ['error'],
    '@typescript-eslint/no-namespace': ['error', { allowDeclarations: true }],
    '@typescript-eslint/triple-slash-reference': ['error'],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
        vars: 'all',
        args: 'after-used',
      },
    ],
    '@typescript-eslint/comma-spacing': ['error'],
    '@typescript-eslint/func-call-spacing': ['error'],
    '@typescript-eslint/no-confusing-non-null-assertion': ['error'],
    '@typescript-eslint/no-extra-non-null-assertion': ['error'],
    '@typescript-eslint/no-non-null-asserted-optional-chain': ['error'],
    '@typescript-eslint/no-unnecessary-type-constraint': ['error'],
    '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
    '@typescript-eslint/no-useless-constructor': ['error'],
    '@typescript-eslint/no-var-requires': ['error'],
    '@typescript-eslint/prefer-as-const': ['error'],
    '@typescript-eslint/prefer-enum-initializers': ['error'],
    '@typescript-eslint/prefer-function-type': ['error'],
    '@typescript-eslint/prefer-literal-enum-member': ['error'],
    '@typescript-eslint/prefer-namespace-keyword': ['error'],
    '@typescript-eslint/prefer-optional-chain': ['error'],
    '@typescript-eslint/prefer-ts-expect-error': ['error'],
    '@typescript-eslint/sort-type-union-intersection-members': ['error'],
    '@typescript-eslint/type-annotation-spacing': ['error'],
    '@typescript-eslint/unified-signatures': ['error'],
    '@typescript-eslint/no-redeclare': ['error'],
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/no-loss-of-precision': 'error',
    '@typescript-eslint/ban-tslint-comment': ['error'],
    '@typescript-eslint/consistent-generic-constructors': 'error',
    '@typescript-eslint/dot-notation': 'error',
    '@typescript-eslint/no-duplicate-enum-values': 'error',
    '@typescript-eslint/no-meaningless-void-operator': 'error',
    '@typescript-eslint/no-mixed-enums': 'error',
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
    '@typescript-eslint/no-throw-literal': 'error',
    '@typescript-eslint/no-unsafe-declaration-merging': 'error',
    // '@typescript-eslint/no-unsafe-enum-comparison': 'error',

    // Disable rules superset by @typescript-eslint
    'no-redeclare': ['off'],
    'no-undef': ['off'],
    'no-unused-vars': ['off'],
    'no-use-before-define': ['off'],
    'no-shadow': ['off'],
    camelcase: ['off'],
    'no-array-constructor': ['off'],
    'no-useless-constructor': ['off'],
    'no-empty-function': 'off',
    'no-loss-of-precision': 'off',
    'dot-notation': 'off',
    'no-throw-literal': 'off',

    // Handled by prettier
    '@typescript-eslint/brace-style': ['off'],
    '@typescript-eslint/comma-dangle': ['off'],
    '@typescript-eslint/indent': ['off'],
    '@typescript-eslint/keyword-spacing': ['off'],
    '@typescript-eslint/member-delimiter-style': ['off'],
    '@typescript-eslint/no-extra-parens': ['off'],
    '@typescript-eslint/no-extra-semi': ['off'],
    '@typescript-eslint/quotes': ['off'],
    '@typescript-eslint/semi': ['off'],
    '@typescript-eslint/space-before-function-paren': ['off'],
    '@typescript-eslint/space-infix-ops': ['off'],
    '@typescript-eslint/class-literal-property-style': ['off'], // useless
    '@typescript-eslint/consistent-indexed-object-style': ['off'], // Also modify type and interface
    '@typescript-eslint/method-signature-style': ['error'],

    // disabled => because will warn to every explicit "any"
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/explicit-module-boundary-types': ['off'],

    // disabled => because will warn for every not typed but correctly infered type var
    '@typescript-eslint/typedef': [
      'off',
      {
        arrayDestructuring: false,
        arrowParameter: false,
        memberVariableDeclaration: false,
        objectDestructuring: false,
        parameter: false,
        propertyDeclaration: false,
        variableDeclaration: false,
        variableDeclarationIgnoreFunction: false,
      },
    ],

    // To decide
    '@typescript-eslint/no-for-in-array': ['off'],
    '@typescript-eslint/prefer-for-of': ['warn'],

    // Disabled => Require slow parser. Requires parserOptions.project above to enable them
    // '@typescript-eslint/no-throw-literal': ['off'],
    '@typescript-eslint/await-thenable': ['off'],
    '@typescript-eslint/no-base-to-string': ['off'],
    '@typescript-eslint/no-confusing-void-expression': ['off'],
    '@typescript-eslint/no-floating-promises': ['off'],
    '@typescript-eslint/no-implied-eval': ['off'],
    '@typescript-eslint/no-misused-promises': ['off'],
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': ['off'],
    '@typescript-eslint/no-unnecessary-condition': ['off'],
    '@typescript-eslint/no-unnecessary-qualifier': ['off'],
    '@typescript-eslint/no-unnecessary-type-arguments': ['off'],
    '@typescript-eslint/no-unnecessary-type-assertion': ['off'],
    '@typescript-eslint/no-unsafe-argument': ['off'],
    '@typescript-eslint/no-unsafe-assignment': ['off'],
    '@typescript-eslint/no-unsafe-call': ['off'],
    '@typescript-eslint/no-unsafe-member-access': ['off'],
    '@typescript-eslint/no-unsafe-return': ['off'],
    '@typescript-eslint/non-nullable-type-assertion-style': ['off'],
    '@typescript-eslint/prefer-includes': ['off'],
    '@typescript-eslint/prefer-nullish-coalescing': ['off'],
    '@typescript-eslint/prefer-readonly-parameter-types': ['off'],
    '@typescript-eslint/prefer-readonly': ['off'],
    '@typescript-eslint/prefer-reduce-type-parameter': ['off'],
    '@typescript-eslint/prefer-regexp-exec': ['off'],
    '@typescript-eslint/prefer-return-this-type': ['off'],
    '@typescript-eslint/prefer-string-starts-ends-with': ['off'],
    '@typescript-eslint/promise-function-async': ['off'],
    '@typescript-eslint/require-array-sort-compare': ['off'],
    '@typescript-eslint/restrict-plus-operands': ['off'],
    '@typescript-eslint/restrict-template-expressions': ['off'],
    '@typescript-eslint/strict-boolean-expressions': ['off'],
    '@typescript-eslint/switch-exhaustiveness-check': ['off'],
    '@typescript-eslint/unbound-method': ['off'],

    // Disabled On purpose
    '@typescript-eslint/ban-ts-comment': ['off'],
    '@typescript-eslint/consistent-type-definitions': ['off'], // unecessary
    '@typescript-eslint/no-dynamic-delete': ['off'], // to complicated for the small benefits
    '@typescript-eslint/no-extraneous-class': ['off'],
    '@typescript-eslint/no-implicit-any-catch': ['off'], // to complicated for the small benefits
    '@typescript-eslint/no-inferrable-types': ['off'],
    '@typescript-eslint/no-invalid-void-type': ['off'], // needs to return undefined
    '@typescript-eslint/no-non-null-assertion': ['off'],
    '@typescript-eslint/no-parameter-properties': ['off'],
    '@typescript-eslint/no-require-imports': ['off'],
    '@typescript-eslint/no-this-alias': ['off'], // to complicated for the small benefits
    '@typescript-eslint/no-type-alias': ['off'],

    // Import
    'import/extensions': ['error', 'never'],
    'import/no-cycle': 'off', // checked by ts

    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
        },
      },
    ],

    // TMP
    'react/prop-types': ['off'],
  },
};
