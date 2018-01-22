const path = require('path');
const entry = require("./src/webpack_config/entry_webpack.js");
// 把打包的css分离出来
const extractTextPlugin = require("extract-text-webpack-plugin");

module.exports={
  entry: entry.path,
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'[name].js'
  },
  module:{
    rules:[
      {
        test: /\.css$/,
        use: extractTextPlugin.extract({
          fallback: "style-loader",
          use: [{loader:"css-loader",options:{importLoaders:1}},'postcss-loader']
        })
      },
      {
        test: /\.styl(us)?$/,
        use: extractTextPlugin.extract({
          use: [{
            loader: "css-loader"
          }, {
            loader: "stylus-loader"
          }],
          // use style-loader in development
          fallback: "style-loader"
        })
      },
      {
        test:/\.(png|jpg|gif)/ ,
        use:[{
          loader:'url-loader',
          options:{
            limit:5000,
            outputPath:'images/'
          }
        }]
      },
      {
        test: /\.(htm|html)$/i,
        use:[ 'html-withimg-loader']
      },
      {
        test: /\.(js)$/,
        use: {
          loader: "babel-loader"
        },
        exclude:/node_modules/
      }
    ]
  },
  plugins:[
    new extractTextPlugin("css/level-reply.css")
  ],
  devServer:{}
}