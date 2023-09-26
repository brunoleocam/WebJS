function soma() {
    let soma = 0;
    for (i in arguments) {
        soma += arguments[i];
    }
}  

console.log(soma(2, 3, 4, 5, 6, 7, 8, 9, 10)) // 54
console.log(soma(2, 3)) // 5
console.log(soma(2)) // 2
console.log(soma()) // 0
console.log(soma('a', 'b', 'c')) // 0abc