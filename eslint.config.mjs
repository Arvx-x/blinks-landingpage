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
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
    rules: {
      // Suppress unused vars (keep underscore-prefixed allowed)
      "@typescript-eslint/no-unused-vars": [
        "off",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }
      ],
      // Allow any
      "@typescript-eslint/no-explicit-any": "off",
      // Allow let even if variable is never reassigned
      "prefer-const": "off",
      // Next/React specific relaxations if needed
      "react/jsx-no-useless-fragment": "off",
    },
  },
];

export default eslintConfig;
