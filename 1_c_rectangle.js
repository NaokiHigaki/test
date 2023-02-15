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

/*const main = () => {
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
main();*/

const vertical = Math.floor(Math.random() * 1000000);
const horizonal = Math.floor(Math.random() * 1000000);
const culc = (vertical, horizonal) => {
    let area = vertical * horizonal;
    let circumference = vertical * 2 + horizonal * 2;
    return [area, circumference];
};

const main = () => { 
    console.log(`vertical = ${vertical}, horizonal = ${horizonal}`);
    console.log(`面積：${culc(vertical, horizonal)[0]}, 周長：${culc(vertical, horizonal)[1]}`);
    return;
};
main();