import {flag,sum,sex} from "./ming.js";

if (flag){
  console.log('小明开发的js');
  console.log(sum(10, 2020));
  console.log(sex);
}

import {sum2,Person} from "./ming.js";


import add from "./ming.js";

console.log(add);


//全部导入
import * as ming from "./ming.js";

console.log(ming.flag);