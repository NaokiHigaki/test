/*const culcArea = (x, y, angle) => { 
    let area = x * y * Math.sin(angle * (Math.PI/180) );
    return area;
};

const display = (x, y, angle) => { 
    console.log(`面積：${culcArea(x, y, angle)}`);
    return;
};

display(4, 3, 90);*/

/*const inputCulc = () => {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.on('line', line => {
        let value = line.split(' ');
        let a = parseInt(value[0]);
        let b = parseInt(value[1]);
        let angle = parseInt(value[2]);
        let area = (a * b * Math.sin(angle * (Math.PI / 180))) / 2;
        let circumference = a + b + Math.sqrt(a ** 2 + b ** 2 - 2 * a * b * Math.cos(angle * Math.PI / 180));
        let height = b * Math.sin(angle * Math.PI / 180);
        console.log(area);
        console.log(circumference);
        console.log(height);
    })
    return;
};
inputCulc();*/

let a = Math.floor(Math.random() * 1000000);
let b = Math.floor(Math.random() * 1000000);
let angle = Math.floor(Math.random() * 181);

const culc = (a, b, angle) => {
    let area = (a * b * Math.sin(angle * (Math.PI / 180))) / 2;
    let circumference = a + b + Math.sqrt(a ** 2 + b ** 2 - 2 * a * b * Math.cos(angle * Math.PI / 180));
    let height = b * Math.sin(angle * Math.PI / 180);
    return [area, circumference, height];
};

const main = () => {
    console.log(`a = ${a}, b = ${b}, angle = ${angle}`);
    console.log(`面積：${culc(a, b, angle)[0]}, 周長：${culc(a, b, angle)[1]}, 高さ：${culc(a, b, angle)[2]}`);
    return;
};
main();