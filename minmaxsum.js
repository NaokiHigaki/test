const checkMax = (array) => { 
    let max = Math.max(...array);
    return max;
};

const checkMin = (array) => { 
    let min = Math.min(...array);
    return min;
};

const culcSum = (array) => { 
    const initialValue = 0;
    const sum = array.reduce(
        (accumlator, currentValue) => accumlator + currentValue, initialValue
    );
    return sum;
};

const display = (array) => { 
    console.log(`最大値：${checkMax(array)}, 最小値：${checkMin(array)}, 合計：${culcSum(array)}`);
    return;
};

const numbers = [89, 23, 52, 10, 51, 32];
const numbers2 = [1, 999, 34, 55, 60, 2, 67];
display(numbers);
display(numbers2);