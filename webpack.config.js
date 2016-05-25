var webpack = require('webpack');

module.exports = {
    entry: './js/alert.js',
    output: {
        path: './dist',
        filename: 'alert.js'
    },
    module: {
        loaders: [{
            test: /\.less$/,
            loader: 'style!css!less'
        }, {
            test: /\.html$/,
            loader: 'html'
        }]
    }
};
