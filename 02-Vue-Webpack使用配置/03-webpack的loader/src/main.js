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

/*1.使用 webpack ./src/main.js ./dist/bundle.js 命令把main.js打包为bundle.js  在index.html应用bundle.js*/