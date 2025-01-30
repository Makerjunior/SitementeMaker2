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
];

export default [
  ...eslintConfig,
  {
    rules: {
      "react/no-unescaped-entities": "off", // Desabilita a regra para entidades não escapadas
      "@typescript-eslint/no-unused-vars": "off", // Ignora erros de variáveis não utilizadas
      "@next/next/no-img-element": "off", // Ignora o aviso de `<img>` e recomenda o uso do `<Image />`
      "react/jsx-no-undef": "off", // Ignora erros de componentes JSX não definidos
      "no-unexpected-multiline": "off", // Ignora erros de parsing relacionados à sintaxe incorreta
      "no-undef": "off", // Ignora erros de variáveis não definidas (útil para o tipo de erro que você encontrou)
      "react/jsx-no-literals": "off", // Ignora erros em relação a literais dentro de JSX (se aplicável)
      '@typescript-eslint/no-empty-object-type': 'off',
    },
  },
];
