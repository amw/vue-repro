const path = require('path')
const VueLoaderPlugin = require('vue-loader/dist/plugin').default


process.env.NODE_ENV = 'production'


module.exports = {
  mode: 'production',
  entry: {'page': './src/page.ts'},
  resolve: {extensions: ['.ts']},
  output: {
    filename: `[name].js`,
    path: path.resolve(__dirname, 'dist/'),
  },
  plugins: [new VueLoaderPlugin()],
  module: {
    rules: [
      {
        test: /\.tsx?$/u,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/u],
        },
      },
      {
        test: /\.vue$/u,
        loader: 'vue-loader',
      },
    ],
    strictExportPresence: true, // Fail hard on missing export
  },
}
