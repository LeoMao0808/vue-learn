// 编程范式:命令式编程/声明式编程
// 编程范式: 面向对象编程(第一公民:对象)/函数式编程(第一公民:函数)
const nums = [10,20,30,111,222,33,232,222];
let newNums = [];
// js数组高阶用法
// filter
// 参数1 filter中回调函数需要返回一个boolean值 1.返回ture当前元素加入到新数组 2.返回false过滤到当前元素
//需求1 取出所有小于100的数字
//常规写法
for (let n of num){
  if (n < 100){
    newNums.push(n);
  }
}
//高阶写法
let filterNum = nums.filter(function(n){
  return n > 100
});
//箭头函数写法
let filterNum = nums.filter((n) => n > 100);

//需求2 :将所有小于100的数字取出并*2
//常规写法
for (let n of newNums){
  if (n < 100){
    newNums.push(n*2);
  }
}
//高阶写法
let mapNum = filterNum.map(function(n){return n * 2;});
//箭头函数写法
let mapNum = filterNum.map((n) => n * 2);

//需求3: 小于100的值* 2后的总值
//常规写法
let total = 0;
for (let n of mapNum){
  total += n;
}
//reduce函数使用
//reduce对数组所有的内容进行汇总
// 参数1 回调函数
// 参数1 preVal上一次return值 默认值为 reduce的第二个参数
// 参数2 当前元素的值
//参数二
let total = mapNum.reduce(function (preValue,n) {return preValue + n},0);
//箭头函数写法
let total = mapNum.reduce((preValue,n) => preValue + n,0);

//链式写法
let total = nums.filter(function (n) {
  return n < 100;
}).map(function (n) {
  return n * 2;
}).reduce(function (preval,n) {
  return preval + n;
},0);

//箭头函数写法
let total = nums.filter((n) => n < 100).map((n) => n * 2).reduce((preVal,n) => preVal + n,0);






