module.exports ={
    "root": true,
    "env": {
      "node": true,
    },
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended",
    ],
    "plugins": [
      "unused-imports",
    ],
    "rules": {
      "no-console": "error",
      "no-debugger": "error",
      "unused-imports/no-unused-imports": "warn",
      "no-duplicate-imports": "error",
      "semi": ["error", "never"],
      "quotes": ["error", "single"],
      "indent": ["error", 2],
      "no-trailing-spaces": "error",
    }
  }
  