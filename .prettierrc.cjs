module.exports = {
    plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
    tabWidth: 4,
    singleQuote: true,
    jsxSingleQuote: true,
    printWidth: 80,
    importOrder: ['^react', '<THIRD_PARTY_MODULES>', '^@/', '^[./]+'],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
};
