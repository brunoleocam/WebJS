// 20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
// para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
// Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
// informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
// nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.

function menorQuantidadeCedulas(valor) {
    let notas = [100, 50, 10, 5, 1];
    const cedulas = [];
    let resto = valor;

    console.log(`Menor quantidade de cedulas para R$ ${valor}`);

    for (valor in notas){
        cedulas.push(Math.floor(resto / notas[valor]));
        resto = resto % notas[valor];  
        if (cedulas[valor] > 0){
            console.log(`    ${cedulas[valor]} nota(s) de R$ ${notas[valor]}`);
        }
    }
}

menorQuantidadeCedulas(18);
menorQuantidadeCedulas(153);
menorQuantidadeCedulas(100);