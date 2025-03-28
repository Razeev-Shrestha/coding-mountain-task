// @ts-check

/**
 * @typedef {import('prettier').Config} PrettierConfig
 */

/**
 * @type {PrettierConfig}
 */
const config = {
    arrowParens: "avoid",
    printWidth: 100,
    tabWidth: 3,
    useTabs: true,
    semi: false,
    singleQuote: true,
    quoteProps: "as-needed",
    jsxSingleQuote: true,
    trailingComma: "es5",
    bracketSpacing: true,
    objectWrap: "preserve",
    bracketSameLine: true,
    endOfLine: "lf"
}

export default config
