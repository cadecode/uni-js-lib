const path = require('path');
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'simple-js-lib.js',
        library: 'SimpleJsLib',
        libraryTarget: 'umd',
        globalObject: 'this'
    }
};
