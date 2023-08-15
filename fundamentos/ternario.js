// Operador ternário é composto por 3 partes: 1º parte é a expressão que retorna verdadeiro ou falso, 
// 2º parte é o valor que será retornado caso a expressão seja verdadeira e 3º parte é o valor que será 
// retornado caso a expressão seja falsa
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado';

console.log(resultado(7.1));
console.log(resultado(6.7));

