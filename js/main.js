/*
获取顶层对象
*/

// 方法一
(typeof window !== 'undefined'
   ? window
   : (typeof process === 'object' &&
      typeof require === 'function' &&
      typeof global === 'object')
     ? global
     : this);

// 方法二
var getGlobal = function () {
  if (typeof self !== 'undefined') { return self; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  throw new Error('unable to locate global object');
};
var glo = getGlobal();

/*
let [x, , y] = [1, 2, 3];
console.log(x);
console.log(y);
*/
/*
function* fibs() {
  let a = 0;
  let b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

let [first, second, third, fourth, fifth, sixth] = fibs();
console.log(sixth);
*/
/*
//惰性求值的，即只有在用到的时候，才会求值。
function f() {
  console.log('aaa');
}

let [xaa = f()] = [1];
*/
/*
{
  let [x = 1, y = x] = [];     // x=1; y=1
}
{
  let [x = 1, y = x] = [2];    // x=2; y=2

}
{
  let [x = 1, y = x] = [1, 2]; // x=1; y=2
}
{
 let [x = 1, y = x] = [];     // ReferenceError 
}
*/
//解构不仅可以用于数组，还可以用于对象。

let obj = { first: 'hello', last: 'world' };
let { first: f, last: l } = obj;
f // 'hello'
l // 'world'
//let命令下面一行的圆括号是必须的，否则会报错。因为解析器会将起首的大括号，理解成一个代码块，而不是赋值语句。
let foo;
({foo} = {foo: 1}); // 成功

let baz;
({bar: baz} = {bar: 1}); // 成功