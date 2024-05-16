const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
        exclude: [
          // Исключаем модули, которые вызывают предупреждения
          path.resolve(__dirname, 'node_modules/@tonconnect/sdk'),
        ],
      },
    ],
  },
};
