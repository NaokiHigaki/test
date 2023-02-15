/*const area = (vertical, horizonal) => {
    let result = vertical * horizonal;
    return result;
};

const parimeter = (vertical, horizonal) => {
    let result = vertical * 2 + horizonal * 2;
    return result;
};

const display = (vertical, horizonal) => {
    console.log(`面積：${area(vertical, horizonal)}, 周長:${parimeter(vertical, horizonal)}`);
    return;
};

display(12, 12);
display(2, 3);*/

const inputCulc = () => {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.on('line', line => {
        let value = line.split(' ');
        let vertical = parseInt(value[0]);
        let horizonal = parseInt(value[1]);
        let area = vertical * horizonal;
        let parimeter = vertical * 2 + horizonal * 2;
        console.log(`${area} ${parimeter}`);
    })
    return;
};

const display = () => {
    console.log("数字を2つ入力してください。(半角スペース開ける)▼");
    inputCulc();
};
display();