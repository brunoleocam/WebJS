// 22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
// parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
// anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
// compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.

function valorAnuidade(mes, valor) {
    if (mes < 1 || mes > 12) {
        return 'Mês inválido';
    }
    return (valor * ((1 + 0.05) ** (mes - 1))).toFixed(2);  
}

console.log(valorAnuidade(1, 100));
console.log(valorAnuidade(2, 100));
console.log(valorAnuidade(3, 100));
console.log(valorAnuidade(4, 100));
console.log(valorAnuidade(5, 100));
console.log(valorAnuidade(6, 100));
console.log(valorAnuidade(7, 100));
console.log(valorAnuidade(8, 100));
console.log(valorAnuidade(9, 100));
console.log(valorAnuidade(10, 100));
console.log(valorAnuidade(11, 100));
console.log(valorAnuidade(12, 100));
console.log(valorAnuidade(13, 100));