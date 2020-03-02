const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
const WebpackMerge = require('webpack-merge');
const baseConfig = require('./base.config');
module.exports = WebpackMerge(baseConfig,{
  plugins:[
    /*压缩js插件 打包使用  开发阶段不使用*/
    new UglifyjsWebpackPlugin()
  ]
})