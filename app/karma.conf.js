module.exports = function(config) {
    config.set({
        frameworks: ['browserify', 'jasmine'],

        files: [
            'src/**/*.js',
            'test/**/*.spec.js',
        ],

        preprocessors: {
            'src/**/*.js':  ['browserify'],
            'test/**/*.js': ['browserify']
        },

        browserify: {
            debug: true,
            transform: [
                ['babelify', {
                    plugins: ['babel-plugin-espower'],
                    presets: ['es2015']
                }]
            ]
        },

        exclude: [],

        browsers: [
            'Chrome',
            'PhantomJS'
        ],

        singleRun: false,

        colors: true,

        logLevel: config.LOG_INFO,

        reporters: ['progress'],
    });
};