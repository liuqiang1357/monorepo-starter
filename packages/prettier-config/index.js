/**
 * @type {import('prettier').Config}
 */
export default {
  arrowParens: "avoid",
  printWidth: 100,
  singleQuote: true,
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-packagejson",
    "prettier-plugin-tailwindcss",
  ],
  importOrder: [
    "<BUILTIN_MODULES>",
    "<THIRD_PARTY_MODULES>",
    "^@/(.*)$",
    "^[./]",
  ],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderTypeScriptVersion: "5.0.0",
  tailwindFunctions: ["cva", "cx", "cn"],
};
