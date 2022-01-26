const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    //mode: 'production',
    mode: 'development',
    target: 'web',
    //devtool: 'inline-source-map',
    devtool: false,
    plugins: [new MiniCssExtractPlugin({
        filename: 'css/[name].bundle.css',
    })],
    entry: {
        'js/base': {
            import: './js/base.js',
        },
        '../menu/static/index/js/main': {
            import: './js/index/main.js',
        },
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'static/'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /[\\/]node_modules[\\/]/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.s?[ac]ss/i,
                use: [MiniCssExtractPlugin.loader,
                      'css-loader',
                      'postcss-loader',
                      'sass-loader'],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
};
