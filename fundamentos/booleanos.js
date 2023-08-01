let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo); // true

console.log('os verdadeiros...');
console.log(!!3); // true
console.log(!!-1); // true
console.log(!!' '); // true
console.log(!![]); // true
console.log(!!{}); // true
console.log(!!Infinity); // true
console.log(!!(isAtivo = true)); // true

console.log('os falsos...');
console.log(!!0); // false
console.log(!!''); // false
console.log(!!null); // false
console.log(!!NaN); // false
console.log(!!undefined); // false
console.log(!!(isAtivo = false)); // false

console.log('pra finalizar...');
console.log(!!('' || null || 0 || ' ')); // true

let nome = '';

console.log(nome || 'Desconhecido'); // Desconhecido