const path = require('path')

module.exports = {
    lintOnSave: false,
    'outputDir': '../client_dist',

    chainWebpack: config => {
        config.plugins.delete('prefetch')
        // Disable prefetch and preload of async modules for 'app' page
        config.plugins.store.delete('prefetch-app');
        config.plugins.store.delete('preload-app');
        // Use this syntax if not using multipage setup
        config.plugins.store.delete('prefetch');
        config.plugins.store.delete('preload');
    },
    configureWebpack: {
        module: {
            rules: []
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src')
            }
        },
        performance: {
            hints: false
        },
        output: {
            filename: '[name].[hash].bundle.js'
        }
    },
}
