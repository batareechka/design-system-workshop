const paletteColorVars = [];

module.exports = {
    extends: ["stylelint-config-standard", "stylelint-config-rational-order"],
    rules: {
        "alpha-value-notation": ["number"],
        "annotation-no-unknown": [
            true,
            {
                ignoreAnnotations: ["default"],
            },
        ],
        "block-closing-brace-newline-before": "always",
        "block-opening-brace-newline-after": "always",
        "color-function-notation": "legacy",
        "declaration-block-no-redundant-longhand-properties": [
            true,
            {
                ignoreShorthands: ["/flex/", "/grid/"],
            },
        ],
        "declaration-no-important": true,
        "declaration-property-value-disallowed-list": {
            "font-weight": ["normal", "bold"],
            background: paletteColorVars,
            "background-color": paletteColorVars,
            "background-image": paletteColorVars,
            border: paletteColorVars,
            "border-color": paletteColorVars,
            "box-shadow": paletteColorVars,
            color: paletteColorVars,
            fill: paletteColorVars,
            stroke: paletteColorVars,
        },
        "function-no-unknown": null,
        "import-notation": "string",
        "max-nesting-depth": [
            3,
            {
                ignoreAtRules: ["each", "media", "supports", "include"],
            },
        ],
        "media-feature-name-no-vendor-prefix": null,
        "number-max-precision": 10,
        "order/properties-alphabetical-order": null,
        "property-no-vendor-prefix": null,
        "selector-class-pattern": [
            "^[a-z]([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+){0,1}$",
            {
                resolveNestedSelectors: true,
                message:
                    "Selector should be written in Two Dashes BEM style (block-name__element-name--modifier-name-value)",
            },
        ],
        "selector-max-compound-selectors": 2,
        "selector-max-specificity": "0,3,0",
        "selector-nested-pattern": [
            "^(?!&-[a-z0-9])",
            {
                message:
                    "It is not allowed to nest selectors this way. See https://studytube.atlassian.net/wiki/spaces/TECH/pages/2170093569/CSS+style+guide#Nesting-rule",
            },
        ],
        "selector-no-vendor-prefix": null,
        "value-no-vendor-prefix": null,
    },
};
