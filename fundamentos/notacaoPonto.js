console.log(typeof console); // object
console.log(Math.ceil(6.1)); // 7
console.log(Math.floor(6.1)); // 6

const obj1 = {};
obj1.nome = 'Bola';
// obj1['nome'] = 'Bola2'; // outra forma de atribuir valor a uma propriedade
console.log(obj1.nome); // Bola

function Obj(nome) {
    this.nome = nome;
    this.exec = function() {
        console.log('Exec...');
    }
}

const obj2 = new Obj('Cadeira');
const obj3 = new Obj('Mesa');
console.log(obj2.nome); // Cadeira
console.log(obj3.nome); // Mesa
obj3.exec(); // Exec...