const path = require('path')

module.exports = {
  entry:'./src/main.js',//入口
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'bundle.js'
  },//出口
  module: {
    rules: [
      {
        test: /\.css$/,
        //css-loader 只负责加载css文件
        //style-loader 负责将样式添加到dom中
        //webpack使用多个loader时,是从右到左
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
}