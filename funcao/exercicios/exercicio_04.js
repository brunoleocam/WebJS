// 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
// e o resto da divisão destes dois valores.

(function(dividendo, divisor) {
    console.log(`Resultado: ${Math.floor(dividendo / divisor)}\nResto: ${dividendo % divisor}`);
})(10, 3) // Resultado: 3 Resto: 1