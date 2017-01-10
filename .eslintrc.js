module.exports = {
    "parser": "babel-eslint",
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "rules": {
        "strict": 0,
        "indent": ["error", 4],
        "semi": ["error", "always"],
        "comma-dangle": ["error", "always-multiline"],
        "space-before-function-paren": ["error", {
            "anonymous": "always",
            "named": "never",
            "asyncArrow": "ignore"
        }],
        "react/jsx-no-bind": ["error", {
            "ignoreRefs": true,
            "allowArrowFunctions": true,
            "allowBind": false
        }]
    },
    "plugins": [
        "standard",
        "promise",
        "react"
    ],
    "env": {
        "browser": true
    }
};
