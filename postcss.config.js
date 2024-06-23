module.exports = {
    // plugins: {
    //     'postcss-preset-env': {
    //         browsers: 'last 2 versions',
    //     },
    //     'postcss-import': {},
    //     'autoprefixer': {},
    //     'postcss-nested': {},
    // }
    plugins: [
        require('postcss-nested'),
        require('postcss-preset-env'),
        require('postcss-mixins'),
    ]
}