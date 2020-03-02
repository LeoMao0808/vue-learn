/*commonjs的模块化规范导入*/
const {add,mul} = require('./js/mathUtils.js')

console.log(add(20, 30));
console.log(mul(20, 30));
/*es6的模块化规范导入*/
import {name,age,height} from "./js/info";

console.log(name);
console.log(age);
console.log(height);

//依赖css文件
require('./css/nomal.css')

//依赖less文件
require('./css/special.less')

document.write('<h2>hello,mao!</h2>')


//5.使用vue进行开发
//1.runtime-only:代码中,不可以有任何template
//2.runtime-compiler:代码中可以有template,因为有compiler可以用于编译疼plate
import Vue from 'vue'
//vue 1.简单使用
// const app = new Vue({
//   el:'#app',
//   template:
//     `<div>
//         <h2>{{msg}}</h2>
//         <button @click="btnC">按钮</button>
//     </div>`,
//   data:{
//     msg:'testVue'
//   },
//   methods:{
//     btnC(){
//       console.log('点击按钮');
//     }
//   }
// })
// vue 2.抽成组件的方式(减少vue实例里面的html)
// const App = {
//   template:
//       `<div>
//         <h2>{{msg}}</h2>
//         <button @click="btnC">按钮</button>
//     </div>`,
//   data() {
//     return {msg:'testVue'}
//   },
//   methods:{
//     btnC(){
//       console.log('点击按钮');
//     }
//   }
// }

//vue 3 抽取代码  src --> vue --> app.js
// import App from './vue/app'

//vue 4 分离模板和js代码
import App from './vue/App.vue'
new Vue({
  el:'#app',
  template:'<App/>',
  components:{
    App
  }
})
