const WebpackMerge = require('webpack-merge');
const baseConfig = require('./base.config');
module.exports = WebpackMerge(baseConfig,{
  devServer:{//配置本地服务器 开发需要  编译不需要
    contentBase: './dist',
    inline: true
  }
})