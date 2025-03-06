import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "indent": ["error", 2],
      "semi": ["error", "always"],
      "no-console":  "warn",
      "no-duplicate-imports": "error",
      "no-unused-vars": "error",
      "object-curly-spacing": ["error", "always"],
      "no-trailing-spaces": "error",
    }
  }
];

export default eslintConfig;
