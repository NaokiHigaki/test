const letter = "ShiroganeNoel";
console.log(`そのまま：${letter}`);
const alphabet = letter.split("");
console.log(`splitしてみた：${alphabet}`);
console.log(alphabet[0]);
const s = letter.split(" ");
console.log(s);

const number = 123456;
const num = number.toString().split("");
console.log(num);
const sum = num.map(Number).reduce((current, next) => current + next);
console.log(sum);
