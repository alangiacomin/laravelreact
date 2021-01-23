// eslint-disable-next-line import/no-extraneous-dependencies
const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.setResourceRoot(process.env.APP_BASENAME);

mix.webpackConfig({
  output: {
    publicPath: process.env.APP_BASENAME,
    chunkFilename: 'js/app/[id].js?id=[chunkhash]',
  }
});

mix.copyDirectory('resources/images', 'public/images');
mix.copy('resources/*', 'public');
mix.copyDirectory('resources/js/locales', 'public/locales');

mix.js('resources/js/index.jsx', 'public/js/app.js').react();

mix.sass('resources/sass/app.scss', 'public/css');

mix.extract();

mix.disableNotifications();
// mix.disableSuccessNotifications();

if (mix.inProduction()) {
  mix.version();
  // mix.sourceMaps();
}

// mix.dump();
