// 12) Faça um algoritmo que calcule o fatorial de um número.

function calcularFatorial(numero){
    let fatorial = 1;
    while (numero > 1){
        fatorial *= numero;
        numero--;
    }
    return fatorial;
}

for (let i = 0; i < 10; i++){
    console.log(calcularFatorial(i));
}
