let num: number = 30;
let title: string = 'whimzhu';

function getNum(_num:number):void {
  num = _num;
}
getNum(35);

console.log(num);

// 接口用法 start

// 对象
interface IObject {
  readonly id: string | number,
  num: number,
  name: string,
  age?: number,
  [propName:string]: any
}

const obj1: IObject = {
  id: 1,
  num: 21,
  name: 'jack',
  city: 'wuhan'
}

// 数组
interface IArray {
  [index: number]: any
}

const arr1 = [1,'1']

// 函数
interface IFun {
  (argument1: number,argument2: string): void
}

const fun: IFun = function (argument1: number,argument2: string) {
  console.log(argument1 + argument2);
}

fun(1, '3');

// 接口用法 end

// 别名type
type person = {
  name: string,
  age: number,
  [propName:string]: any
}

const p: person = {
  name: 'jay',
  age: 45
}

// 完整函数定义

const fun1: (arg1: number, arg2: number, ...args: any[]) => number = function (argument1: number = 1, argument2: number = 1, ...arguments) {
  console.log(arguments);
  return argument1 + argument2
}

console.log(fun1(3, 2, 1, 0))

// 断言
// 1、变量 as 类型
// 2、<类型>变量

// 枚举
enum En1 {
  one,
  two,
  three
}

const enum En2 {
  one,
  two,
  three
}

declare enum En3 {
  one,
  two,
  three
}

declare const enum En4 {
  one,
  two,
  three
}

console.log(En1.one)
console.log(En2.one)
console.log(En3.one)
console.log(En4.one)
