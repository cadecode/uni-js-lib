const path = require('path');
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'uni-js-lib.js',
        library: 'UniJsLib',
        libraryTarget: 'umd',
        libraryExport: 'default',
        globalObject: 'this'
    }
};
