/*const displayNumber = (x, y, z) => {
  console.log(x);
  console.log(y);
  console.log(z);
  return;
};
const defineNumber = () => {
  const x = Math.floor(Math.random() * 100);
  const y = Math.floor(Math.random() * 100);
  const z = Math.floor(Math.random() * 100);
  displayNumber(x, y, z);
  return;
};
defineNumber();*/
/*var a = 1;
var b = 8;
console.log(`${a} ${b}`);
a = b;
console.log(`${a} ${b}`); //オブジェクトとして同じになってしまう。*/

var a = 1;
var b = 8;
console.log(`${a} ${b}`);
let tmp;
tmp = a;
a = b;
b = tmp;
console.log(`${a} ${b}`);
