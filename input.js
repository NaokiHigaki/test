const inputLetter = () => {
    console.log("入力してください。");
    var input = require("fs").readFileSync('/dev/stdin').toString().split('');
    console.log(input[0]);
    console.log("入力完了");
    return;
};
inputLetter();