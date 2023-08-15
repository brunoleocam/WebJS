console.log('01)', '1' == 1); // == compara o valor
console.log('02)', '1' === 1); // === compara o valor e o tipo
console.log('03)', '3' != 3); // != compara o valor
console.log('04)', '3' !== 3); // !== compara o valor e o tipo

console.log('05)', 3 < 2);
console.log('06)', 3 > 2);
console.log('07)', 3 <= 2);
console.log('08)', 3 >= 2);

// Datas
const d1 = new Date(0); // 0 = 01/01/1970
const d2 = new Date(0); 
console.log('09)', d1 === d2); // compara endereço de memória
console.log('10)', d1 == d2); // compara endereço de memória
console.log('11)', d1.getTime() === d2.getTime()); // compara o valor

console.log('12)', undefined == null);
console.log('13)', undefined === null);
 