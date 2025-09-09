import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";
import solid from "eslint-plugin-solid/configs/typescript";
import * as tsParser from "@typescript-eslint/parser";

export default defineConfig([
  globalIgnores([".output/*", ".vinxi/*"]),
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    ...solid,
    plugins: { js, solid: solid.plugins.solid },
    extends: ["js/recommended"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "tsconfig.json",
      },
      globals: { ...globals.browser, ...globals.node }
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
  tseslint.configs.recommended,
]);
