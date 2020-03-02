const path = require('path')

module.exports = {
  entry: './src/main.js',//入口
  output: {
    path:path.resolve(__dirname,'dist'),
    filename:'bundle.js',
    publicPath:'dist/'
  },//出口
  module: {
    rules: [
        /*处理css*/
      {
        test: /\.css$/,
        //css-loader 只负责加载css文件
        //style-loader 负责将样式添加到dom中
        //webpack使用多个loader时,是从右到左
        use: [ 'style-loader', 'css-loader' ]
      },
        /*处理less文件*/
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      },
        /*处理图片*/
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              //当加载的图片小于limit时,会将图片编译为base64字符串形式
              //当加载的图片大于limit时,需要使用file-loader模块进行加载
              limit: 20000,
              /*打包后图片名称的修改*/
              name: 'img/[name].[hash:8].[ext]'
            }

          }
        ]
      },
        /*es6转es5 首先需要安装babel@7 babel-core  babel-preset-es2015*/
      {
        test: /\.js$/,
        /*exclude:排除*/
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
        /*处理.vue文件 vue-loader 14.X版本以后需要安装一个插件*/
      {
        test:/\.vue$/,
        use:['vue-loader']
      }
    ]
  },
  resolve: {
    /*导入.vue文件可以省略.vue*/
    extensions:['.js','.css','.vue'],
    alias:{
      'vue$':'vue/dist/vue.esm.js',//'$:代表结尾,值为import vue 时指定使用哪个js'
    }
  }
}