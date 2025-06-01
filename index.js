/* eslint sort-keys/sort-keys-fix: "error" */
/* eslint-disable sort-keys/sort-keys-fix */

const addPaddingLineAfter = (statement) => [
    { blankLine: "always", prev: statement, next: "*" },
    { blankLine: "any", prev: statement, next: statement }
];

/* eslint-enable sort-keys/sort-keys-fix */
const errorRules = {
    "@stylistic/arrow-parens": ["error", "always"],
    "@stylistic/brace-style": ["error", "1tbs"],
    "@stylistic/comma-dangle": ["error", "never"],
    "@stylistic/lines-around-comment": [
        "error",
        { allowBlockStart: true, beforeBlockComment: false, beforeLineComment: true }
    ],
    "@stylistic/no-extra-semi": "error",
    "@stylistic/no-multi-spaces": "error",
    "@stylistic/padding-line-between-statements": [
        "error",
        ...addPaddingLineAfter("directive"),
        ...addPaddingLineAfter("import"),
        ...addPaddingLineAfter("cjs-import")
    ],
    "@stylistic/quote-props": ["error", "as-needed"],
    "@stylistic/quotes": ["error", "double", { allowTemplateLiterals: false, avoidEscape: true }],
    "@stylistic/semi": ["error", "always"],
    "import-x/exports-last": "error",
    "import-x/first": "error",
    "import-x/newline-after-import": ["error", { considerComments: true, count: 1 }],
    "import-x/no-absolute-path": ["error", { amd: false, commonjs: true, esmodule: true }],
    "import-x/no-named-default": "error",
    "import-x/no-useless-path-segments": [
        "error",
        {
            noUselessIndex: true
        }
    ],
    "import-x/no-webpack-loader-syntax": "error",
    "import-x/order": [
        "error",
        {
            groups: ["builtin", "external", "internal", "parent", "sibling", "index", "object", "type"]
        }
    ],
    "import-x/prefer-default-export": ["error", { target: "single" }],
    "no-return-await": "error",
    "promise/always-return": ["error", { ignoreLastCallback: true }],
    "promise/prefer-await-to-callbacks": ["error"],
    "promise/prefer-await-to-then": ["error"],
    radix: ["error", "as-needed"],
    "require-await": "error",
    "spaced-comment": ["error", "always"],
    "unicorn/error-message": "error",
    "unicorn/prefer-string-starts-ends-with": "error",
    "unicorn/prefer-ternary": ["error", "only-single-line"],
    "unicorn/prefer-type-error": "error",
    "unicorn/throw-new-error": "error"
};
/* eslint-disable sort-keys/sort-keys-fix */

/* eslint-enable sort-keys/sort-keys-fix */
const offRules = {
    "@stylistic/indent": ["error", 4],
    "consistent-return": "off",
    "import-x/no-duplicates": "off", // @see https://github.com/RightCapitalHQ/frontend-style-guide/issues/60
    "no-constructor-return": "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-param-reassign": "off",
    "no-promise-executor-return": "off",
    "no-shadow": "off",
    "no-underscore-dangle": "off",
    "sonarjs/fixme-tag": "off",
    "sonarjs/todo-tag": "off",
    "unicorn/consistent-function-scoping": "off",
    "unicorn/expiring-todo-comments": "off",
    "unicorn/explicit-length-check": "off",
    "unicorn/filename-case": "off",
    "unicorn/no-anonymous-default-export": "off",
    "unicorn/no-array-callback-reference": "off",
    "unicorn/no-array-for-each": "off",
    "unicorn/no-array-push-push": "off",
    "unicorn/no-array-reduce": "off",
    "unicorn/no-negated-condition": "off",
    "unicorn/no-null": "off",
    "unicorn/no-this-assignment": "off",
    "unicorn/prefer-global-this": "off",
    "unicorn/prefer-module": "off",
    "unicorn/prefer-object-from-entries": "off",
    "unicorn/prefer-reflect-apply": "off",
    "unicorn/prefer-structured-clone": "off",
    "unicorn/prevent-abbreviations": "off"
};
/* eslint-disable sort-keys/sort-keys-fix */

/* eslint-enable sort-keys/sort-keys-fix */
const offStandardConfigConflictingRules = {
    "brace-style": "off",
    "comma-dangle": "off",
    "eol-last": "off",
    indent: "off",
    "no-multi-spaces": "off",
    "quote-props": "off",
    quotes: "off",
    semi: "off",
    "space-before-function-paren": "off"
};
/* eslint-disable sort-keys/sort-keys-fix */

module.exports = {
    plugins: ["sonarjs", "sort-keys", "regexp"],
    extends: [
        "plugin:import-x/recommended",
        "plugin:promise/recommended",
        "plugin:regexp/recommended",
        "plugin:unicorn/recommended",
        "plugin:sonarjs/recommended-legacy",
        "standard",
        "plugin:@stylistic/recommended-extends",
        "plugin:markdown/recommended-legacy",
        "plugin:yml/standard"
    ],
    rules: {
        ...errorRules,
        ...offRules,
        ...offStandardConfigConflictingRules
    }
};
