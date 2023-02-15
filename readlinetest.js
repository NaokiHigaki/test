/*process.stdin.resume();
process.stdin.setEncoding('utf8');

var data = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  data.push(line);
  data = line.split(' ').map((el) => parseInt(el));
});*/

const input = () => {
  const receiveValue = () => {
    const readline = require('readline');
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    const result = () => {
      rl.on('line', (line) => {
        let nums = line.split(' ');
        let x = parseInt(nums[0]);
        return x;
      })
    };
    console.log(`見えてる？：${result()}`);
    return result;
  };
  let ans = receiveValue();
  console.log(ans);
  return;
};
input();

/*const test = () => {
  let x = 3;
  let ans = x * 2;
  return ans;
};
console.log(test());

let result = test();
console.log(test());*/