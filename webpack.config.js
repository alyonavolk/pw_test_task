const HtmlWebpackPlugin = require('html-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const StylelintPlugin = require('stylelint-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpack = require('webpack');

const path = require('path');

module.exports = (env, argv) => {
    const mode = argv.mode;
    const isDevelopment = mode === 'development';

    return {
        entry: path.join(__dirname, 'src', 'index.js'),
        output: {
            path: path.join(__dirname, 'build'),
            filename: "bundle.js",
            assetModuleFilename: path.join('images', '[name][ext][query]'),
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx|tsx|ts)$/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: ['@babel/preset-env', "@babel/preset-react"],
                                plugins: [isDevelopment && require('react-refresh/babel')].filter(Boolean)
                            }
                        }
                    ],
                    exclude: /node_modules/
                },
                {
                    test: /\.(s[ac])ss$/i,
                    use: [
                        mode === 'production' ? MiniCssExtractPlugin.loader : "style-loader",
                        {
                            loader: "css-loader",
                            options: {
                                importLoaders: 1,
                                url: false
                            }
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                postcssOptions: {
                                    config: path.resolve(__dirname, "postcss.config.js"),
                                },
                            },
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sassOptions: {
                                    includePaths: [
                                        path.resolve(__dirname, 'src', 'styles'),
                                        path.resolve(__dirname, 'src', 'components'),
                                    ],
                                },
                            },
                        },
                    ]
                },
                {
                    test: /\.(png|jpg|jpeg|gif|svg)$/i,
                    type: 'asset/resource',
                },
                {
                    test: /\.(woff2?|eot|ttf|otf)$/i,
                    type: 'asset/resource',
                },
            ],
        },
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
        plugins: [
            new FileManagerPlugin({
                events: {
                    onStart: {
                        delete: ['build'],
                    },
                }
            }),
            new MiniCssExtractPlugin({
                filename: 'styles/[name].css',
            }),
            new StylelintPlugin({
                extensions: ['css', 'pcss'],
                context: path.resolve(__dirname, 'src'),
                configFile: path.resolve(__dirname, '.stylelintrc.js'),
            }),
            new ESLintPlugin({
                context: path.resolve(__dirname, 'src', 'js'),
                overrideConfigFile: path.resolve(__dirname, '.eslintrc.js'),
            }),
            new CopyPlugin({
                patterns: [
                    {
                        from: path.join(__dirname, 'src', 'fonts'),
                        to: 'fonts'
                    },
                    {
                        from: path.join(__dirname, 'src', 'images'),
                        to: 'images'
                    }
                ]
            }),
            isDevelopment && new HtmlWebpackPlugin({
                template: path.join(__dirname, 'src', 'pages', 'index.html'),
                filename: 'index.html'
            }),
            isDevelopment && new ReactRefreshWebpackPlugin(),
            new webpack.ProvidePlugin({
                React: 'react',
            }),
        ].filter(Boolean),
        context: __dirname,
        devtool: "source-map",
        devServer: {
            watchFiles: path.join(__dirname, 'src'),
            port: 3000,
            allowedHosts: "all",
            hot: true,
            client: {
              overlay: {
                errors: true,
                warnings: true,
              },
              progress: true
            },
        },
        optimization: {
            minimize: true,
            minimizer: [
                new TerserPlugin(),
                new CssMinimizerPlugin()
            ],
        },
    }
}