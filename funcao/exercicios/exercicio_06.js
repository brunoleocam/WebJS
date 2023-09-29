// 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos.

function jurosSimples(capitalInicial, taxaJuros, tempoAplicacao) {
    return capitalInicial + (capitalInicial * taxaJuros * tempoAplicacao);
}

function jurosCompostos(capitalInicial, taxaJuros, tempoAplicacao) {
    return capitalInicial * (1 + taxaJuros) ** tempoAplicacao;
}

console.log(jurosSimples(100, 0.1, 2)); // 120
console.log(jurosCompostos(100, 0.1, 2)); // 121
