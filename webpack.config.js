const path = require("path");
module.exports = {
  mode: 'development',
  devtool: "eval-source-map",
  entry: ['./client/client.js'],
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react'],
                        plugins: ['transform-object-rest-spread'
                         ,'babel-plugin-transform-class-properties']
                    }
                },
        exclude: /node_modules/
      },
      {
        test: /(\.css)$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  node: { fs: 'empty' ,  net: 'empty'}
}
