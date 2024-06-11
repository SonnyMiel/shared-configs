import stylistic from "@stylistic/eslint-plugin";

export default [
  {
    name: "configs/stylistic",
  },
  stylistic.configs.customize({
    arrowparens: true,
    blockspacing: true,
    bracestyle: "1tbs",
    commadangle: "always",
    flat: true,
    indent: 2,
    jsx: true,
    quoteprops: "as-needed",
    quotes: "double",
    semi: true,
  }),
];
