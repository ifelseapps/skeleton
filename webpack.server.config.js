const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = () => ({
  target: 'node',
  externals: [nodeExternals()],
  entry: './src/index@server.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css/,
        exclude: /node_modules/,
        use: {
          loader: 'null-loader'
        }
      }
    ]
  }
});
