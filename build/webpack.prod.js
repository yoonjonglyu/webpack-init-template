const commonPaths = require('./common-paths');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    mode : 'production',
    entry : {
        app : [`${commonPaths.appEntry}/index.js`]
    },
    output : {
        filename : '[name].[chunkhash].js',
        path : commonPaths.outputPath,
        publicPath: '/'
    },
    devtool : 'source-map',
    module : {
        rules : [
            {
                test : /\.css*/,
                use : ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use : [
                        {
                            loader : 'css-loader',
                            options : {
                                modules : true,
                                importLoaders: 1,
                                camelCase : true,
                                sourceMap : true
                            }
                        },
                        {
                            loader : 'postcss-loader',
                            options : {
                                config : {
                                    ctx : {
                                        autoprefixer : {
                                            browsers : 'last 2 versions'
                                        }
                                    }
                                }
                            }
                        }
                    ]
                })
            }
        ]
    },
    optimization : {
        splitChunks: {
            cacheGroups : {
                vendor : {
                    chunks : 'initial',
                    test : 'vendor',
                    name : 'vendor',
                    enforce : true
                }
            }
        }
      },
    plugins : [
        new ExtractTextPlugin({
            filename : 'css/styles.[hash].css',
            allChunks : true
        })
    ]
};

module.exports = config;