import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin-js';
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    files: [
      "**/*.mjs"
    ],
    languageOptions: {
      globals: globals.node,
      sourceType: "module",
      ecmaVersion: 2022
    },
    extends: [
      eslint.configs.recommended
    ],
    rules: {
      "array-bracket-newline": [
        "error",
        "always",
      ],
      "array-element-newline": [
        "error",
        "always",
      ],
      "no-multi-spaces": "error",
      "no-trailing-spaces": "error",
      "space-in-parens": [
        "error",
        "never"
      ],
      "space-infix-ops": "error",
      "space-before-blocks": "error",
      "space-before-function-paren": [
        "error",
        {
          "anonymous": "always",
          "named": "never",
          "asyncArrow": "always"
        }
      ],
      "keyword-spacing": "error",
      "object-curly-spacing": [
        "error",
        "always"
      ],
      "no-multiple-empty-lines": [
        "error",
        {
          "max": 1,
          "maxEOF": 1,
          "maxBOF": 0
        }
      ],
      "object-curly-newline": [
        "error",
        "always"
      ],
      "padding-line-between-statements": [
        "error",
        {
          "blankLine": "always", "prev": "*", "next": "return"
        },
        {
          "blankLine": "always", "prev": [
            "const",
            "let",
            "var"
          ], "next": "*"
        },
        {
          "blankLine": "any", "prev": [
            "const",
            "let",
            "var"
          ], "next": [
            "const",
            "let",
            "var"
          ]
        }
      ],
      "no-irregular-whitespace": "error", // Disallow irregular whitespace characters
      "no-mixed-spaces-and-tabs": "error", // Disallow mixed spaces and tabs for indentation
      "no-tabs": "error", // Disallow tabs
      "no-whitespace-before-property": "error", // Disallow whitespace before properties
      "no-empty-character-class": "error", // Disallow empty character classes in regular expressions
      "no-regex-spaces": "error",
    }
  }, {
  files: [
    "src/**/*.{js,ts}"
  ],
  // ignores: ["node_modules", 'dist/**', "package*.json"],
  languageOptions: {
    globals: globals.node,
    parser: tseslint.parser,
    sourceType: "commonjs",
    parserOptions: {
      project: true,
      tsconfigRootDir: import.meta.dirname
    },
  },
  extends: [
    eslint.configs.recommended,
    tseslint.configs.recommended,
    tseslint.configs.recommendedTypeChecked, // Added recommended type-checked rules
    tseslint.configs.strict,
    tseslint.configs.strictTypeChecked,
    tseslint.configs.stylistic,
    tseslint.configs.stylisticTypeChecked,
  ],
  plugins: {
    "@typescript-eslint": tseslint.plugin,
    "@stylistic/js": stylistic,
  },
  rules: {
    "no-multi-spaces": "error", // Prevents multiple spaces
    "no-trailing-spaces": "error", // No spaces at end of lines
    "space-in-parens": [
      "error",
      "never"
    ], // No spaces inside parentheses
    "space-infix-ops": "error", // Spaces around operators
    "space-before-blocks": "error", // Space before blocks
    "space-before-function-paren": [
      "error",
      {
        "anonymous": "always",
        "named": "never",
        "asyncArrow": "always"
      }
    ],
    "keyword-spacing": "error", // Spaces around keywords
    "object-curly-spacing": [
      "error",
      "always"
    ], // Spaces inside object literals
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 1, // Maximum number of consecutive empty lines
        "maxEOF": 1, // Maximum number of empty lines at end of file
        "maxBOF": 0 // Maximum number of empty lines at beginning of file
      }
    ],
    "padding-line-between-statements": [ // Optional: Control line breaks between specific statements
      "error",
      {
        "blankLine": "always", "prev": "*", "next": "return"
      }, // Line break before return
      {
        "blankLine": "always", "prev": [
          "const",
          "let",
          "var"
        ], "next": "*"
      },
      {
        "blankLine": "any", "prev": [
          "const",
          "let",
          "var"
        ], "next": [
          "const",
          "let",
          "var"
        ]
      }
    ],
    "array-bracket-newline": [
      "error",
      "always",
    ],
    "array-element-newline": [
      "error",
      "always",
    ],
    "object-curly-newline": [
      "error",
      {
        "ObjectExpression": "always",
        "ObjectPattern": {
          "multiline": true
        },
        "ImportDeclaration": "never",
        "ExportDeclaration": {
          "multiline": true, "minProperties": 3
        }
      }
    ],
    "no-irregular-whitespace": "error", // Disallow irregular whitespace characters
    "no-mixed-spaces-and-tabs": "error", // Disallow mixed spaces and tabs for indentation
    "no-tabs": "error", // Disallow tabs
    "no-whitespace-before-property": "error", // Disallow whitespace before properties
    "no-empty-character-class": "error", // Disallow empty character classes in regular expressions
    "no-regex-spaces": "error",
    "function-paren-newline": [
      "error",
      {
        "minItems": 3
      }
    ],
    "function-call-argument-newline": [
      "error",
      "never"
    ],
    "@stylistic/js/function-call-spacing": [
      "error",
      "never"
    ],
  }
},

);