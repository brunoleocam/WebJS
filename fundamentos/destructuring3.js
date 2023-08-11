function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

const obj = {max: 50, min: 40};
console.log(rand(obj)); // 40 <= x < 50
console.log(rand({min: 955})); // 955 <= x < 1000
console.log(rand({})); // 0 <= x < 1000
// console.log(rand()); // TypeError: Cannot destructure property `min` of 'undefined' or 'null'.