// novo recurso do ES2015

const pessoa = {
    nome: 'Luana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa; // tire de dentro do objeto pessoa os atributos nome e idade
console.log(nome, idade); // Ana 5

const { nome: n, idade: i } = pessoa; // tire de dentro do objeto pessoa os atributos nome e idade e atribua a variáveis n e i
console.log(n, i); // Ana 5

const { sobrenome, bemHumorada = true } = pessoa; // tire de dentro do objeto pessoa o atributo sobrenome e atribua a variável sobrenome e atribua true a variável bemHumorada
console.log(sobrenome, bemHumorada); // undefined true

const { endereco: { logradouro, numero, cep } } = pessoa; // tire de dentro do objeto pessoa o atributo endereco e tire de dentro do objeto endereco os atributos logradouro, numero e cep
console.log(logradouro, numero, cep); // Rua ABC 1000 undefined

// const { conta: { ag, num } } = pessoa; // tire de dentro do objeto pessoa o atributo conta e tire de dentro do objeto conta os atributos ag e num    
// console.log(ag, num); // TypeError: Cannot destructure property `ag` of 'undefined' or 'null'.

