import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        jest: "readonly",
        expect: "readonly",
        test: "readonly",
        console: "readonly",
        module: "readonly",
        __dirname: "readonly",
      },
    },
  },
  pluginJs.configs.recommended,
];
