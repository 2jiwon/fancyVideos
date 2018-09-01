module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "settings": {
    "escmascript": 6,
    "jsx": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "indent": [
      "error",
      "space"
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always", {
        "omitLastInOneLineBlock": true
      },
    ]
  }
};
