const filhas = ['Valeska', 'Cibalena'];
const filhos = ['Uoxiton', 'Uesclei'];
const todos = filhas.concat(filhos, 'Fulano');
console.log(todos, filhas, filhos);

// [ 'Valeska', 'Cibalena', 'Uoxiton', 'Uesclei', 'Fulano' ] [ 'Valeska', 'Cibalena' ] [ 'Uoxiton', 'Uesclei' ]

console.log([].concat([1, 2], [3, 4], 5, [[6, 7]]));