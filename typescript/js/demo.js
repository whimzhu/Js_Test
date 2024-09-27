let num = 30;
let title = 'whimzhu';
function getNum(_num) {
    num = _num;
}
getNum(35);
console.log(num);
const obj1 = {
    id: 1,
    num: 21,
    name: 'jack',
    city: 'wuhan'
};
const arr1 = [1, '1'];
const fun = function (argument1, argument2) {
    console.log(argument1 + argument2);
};
fun(1, '3');
const p = {
    name: 'jay',
    age: 45
};
// 完整函数定义
const fun1 = function (argument1 = 1, argument2 = 1, ...arguments) {
    console.log(arguments);
    return argument1 + argument2;
};
console.log(fun1(3, 2, 1, 0));
// 断言
// 1、变量 as 类型
// 2、<类型>变量
// 枚举
var En1;
(function (En1) {
    En1[En1["one"] = 0] = "one";
    En1[En1["two"] = 1] = "two";
    En1[En1["three"] = 2] = "three";
})(En1 || (En1 = {}));
console.log(En1.one);
console.log(0 /* one */);
console.log(En3.one);
console.log(0 /* one */);
