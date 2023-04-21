// funcao sem retorno

function imprimirSoma(a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3)
//imprimirSoma(2) dá erro.

imprimirSoma(2, 3 , 4, 5, 6, 6) // ele soma os dois e ignora o resto

// funcao com retorno

function soma (a , b = 1) { //dar valor padrao para b
    return a + b
}
console.log(soma( 2 , 3 )) // nessa funcao tive q por ela no console.log par aser exibida.

console.log(soma(2)) // vai funcionar, porem o b por padrao é igual a 1 (valor dado na funcao)
// ESSA SOMA DA 3.