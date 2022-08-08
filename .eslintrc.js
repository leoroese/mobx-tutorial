// .eslintrc.js
module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["mobx"],
  extends: ["plugin:mobx/recommended", "react-app", "react-app/jest"],
  rules: {
    "mobx/missing-observer": "off",
  },

  /*
      rules: {
          // these values are the same as recommended
          "mobx/exhaustive-make-observable": "warn",
          "mobx/unconditional-make-observable": "error",
          "mobx/missing-make-observable": "error",
          "mobx/missing-observer": "warn",
          "mobx/no-anonymous-observer": "warn"
      }
      */
};
