// Objetct.preventExtensions
// Não permite adicionar novos atributos ao objeto
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
});

console.log('Extensível:', Object.isExtensible(produto));

produto.nome = 'Borracha';
produto.descricao = 'Borracha escolar branca';
delete produto.tag;
console.log(produto);

// Object.seal
// Não permite adicionar nem excluir atributos do objeto
const pessoa = {
    nome: 'Juliana', idade: 35
};

Object.seal(pessoa);
console.log('Selado:', Object.isSealed(pessoa));

pessoa.sobrenome = 'Silva';
delete pessoa.nome;
pessoa.idade = 29;
console.log(pessoa);

// Object.freeze = selado + valores constantes
// Não permite adicionar, excluir ou modificar atributos do objeto
const carro = {
    marca: 'Ford', modelo: 'Ka'
};