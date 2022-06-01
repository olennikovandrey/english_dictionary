const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: path.resolve (__dirname, "../src/index.tsx"),
  mode: "development",
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle[hash].tsx",
    chunkFilename: "[id].tsx",
    publicPath: ""
  },

  devServer: {
    port: 4000,
    historyApiFallback: true,
    hot: true,
    open: true
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: "html-loader",
      },
      { test: /\.tsx?$/, loader: "ts-loader" },
      {
        test: /\.(css|sass|scss)$/i,
        exclude: /node_modules/,
        use: [ "style-loader", "css-loader", "sass-loader" ]
      },
      {
        test: /\.(pdf|png|jpg|gif|ico|svg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/i,
        type: "asset/resource",
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../public/index.html"),
      filename: "index.html",
      inject: "body"
    }),
    new CleanWebpackPlugin()
  ],
};
