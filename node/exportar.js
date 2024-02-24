console.log(module.exports);
console.log(module.exports === this);
console.log(module.exports === exports);

this.a = 1;
exports.b = 2;
module.exports.c = 3;

exports = null;
console.log(module.exports);

exports = {
    nome: 'Teste'
} // Não será exportado, pois o exports foi modificado

console.log(module.exports);

module.exports = { publico: true }; // Será exportado, pois o module.exports foi modificado