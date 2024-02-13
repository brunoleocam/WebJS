const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
];

// Desafio 1: Todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista;
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas)); // false

// Desafio 2: Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista;
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista)); // true

// Desafio 3: Retornar a média das notas dos alunos
const media = (acumulador, nota) => acumulador + nota;
console.log(alunos.map(a => a.nota).reduce(media) / alunos.length); // 8.5

// Desafio 4: Retornar a média das notas dos alunos bolsistas
const bolsistas = alunos.filter(a => a.bolsista);
console.log(bolsistas.map(a => a.nota).reduce(media) / bolsistas.length); // 9.15

// Desafio 5: Retornar a média das notas dos alunos não bolsistas
const naoBolsistas = alunos.filter(a => !a.bolsista);
console.log(naoBolsistas.map(a => a.nota).reduce(media) / naoBolsistas.length); // 8.05

// Desafio 6: Retornar a média das notas dos alunos bolsistas e não bolsistas
console.log(alunos.map(a => a.nota).reduce(media) / alunos.length); // 8.5
console.log(alunos.map(a => a.nota).reduce(media) / alunos.length); // 8.5

