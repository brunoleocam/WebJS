function rand ([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min] // Inverte os valores
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40])) // 40 <= x < 50
console.log(rand([992])) // 992 <= x < 1000
console.log(rand([, 10])) // 0 <= x < 10
console.log(rand([])) // 0 <= x < 1000
// console.log(rand()) // TypeError: Cannot read property 'Symbol(Symbol.iterator)' of undefined