var name = 'ming';
var age = 23;
var flag = true;

function sum(num1,num2) {
  return num1 + num2
}

/*导出方式1*/
export {
 flag,sum
}

/*导出方式2*/
export  var sex = '男';
export  var height = '188';


/*3.导出函数*/
export function sum2(num1,num2) {
  return num1 + num2
}


export class Person{
  run(){
    console.log('runing');
  }
}


/*5.export default*/
const address = '北京市'
export default address; //只用有一个默认的

