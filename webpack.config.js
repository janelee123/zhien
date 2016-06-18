var path = require('path')
var webpack = require('webpack')

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel',
            include: __dirname,
            exclude: /node_modules/
        }, {
            test: /\.css?$/,
            loaders: ['style', 'raw'],
            include: __dirname
        },{
            test: /\.scss?$/,
            loader: 'css!sass'
        }]
    },
    babel: {
        cacheDirectory: false,
        presets: [
            "es2015", "react", "stage-2"
        ],
        plugins: [
            'transform-class-properties',
            'transform-es2015-arrow-functions',
            'transform-es2015-block-scoping',
            'transform-es2015-object-super'
        ]
    }
}