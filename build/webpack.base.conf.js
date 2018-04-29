const path = require('path')
const cssnano = require('cssnano');

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  context: path.resolve(__dirname, '../'),
  // entry: {
  //   app: './src/main.js'
  // },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'lib': resolve('node_modules')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter'),
          emitWarning: true
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.css$/,
        use: [
          {
            // loader: 'style-loader'
            loader: 'vue-style-loader'
          }
        ].concat([
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              minimize: false
            }
          }
        ]).concat([
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  cssnano({
                    autoprefixer: {
                      add: true,
                      remove: true,
                      browsers: ['ie >= 8', 'firefox >= 15']
                    },
                    discardComments: {
                      removeAll: true
                    },
                    discardUnused: false,
                    mergeIdents: false,
                    reduceIdents: false,
                    safe: true,
                    sourcemap: true
                  })
                ]
              }
            }
          }
        ])
      },
      {
        test: /\.woff(\?.*)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            prefix: 'fonts/',
            name: '[path][name].[ext]',
            limit: 10000,
            mimetype: 'application/font-woff'
          }
        }]
      },
      {
        test: /\.woff2(\?.*)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            prefix: 'fonts/',
            name: '[path][name].[ext]',
            limit: 10000,
            mimetype: 'application/font-woff2'
          }
        }]
      },
      {
        test: /\.otf(\?.*)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            prefix: 'fonts/',
            name: '[path][name].[ext]',
            limit: 10000,
            mimetype: 'font/opentype'
          }
        }]
      },
      {
        test: /\.ttf(\?.*)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            prefix: 'fonts/',
            name: '[path][name].[ext]',
            limit: 10000,
            mimetype: 'application/octet-stream'
          }
        }]
      },
      {
        test: /\.eot(\?.*)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            prefix: 'fonts/',
            name: '[path][name].[ext]'
          }
        }]
      },
      {
        test: /\.svg(\?.*)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            prefix: 'fonts/',
            name: '[path][name].[ext]',
            limit: 10000,
            mimetype: 'image/svg+xml'
          }
        }]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: '[path][hash].[ext]'
          },
        }],
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
