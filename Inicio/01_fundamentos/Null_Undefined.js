let valor // nao inicializada ( n dei valor )
console.log(valor) // vai dar undefined, pq n defini valores a ela.
//console.log(valor2) // valor dois nem foi declarado, diferente de undefined.
valor = null // ausencia de valor (nao aponta pra nenhum local de memoria)
console.log(valor) // USAR Null para zerar uma variavel /EVITE UNDEFINED
// console.log(valor.toString) // da um erro!!

const produto = {}
console.log (produto.preco) // vai dizer undefined
//console.log (produto.preco.a) // o produto esta definido e por isso aparece undefined
// porem o preco nao, e tentar achar o 'a' da um erro. Pelo menos a ultima precisa estar definida
produto.preco = 3.5
console.log(produto)
produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco) // falso, vazio
console.log(produto)
produto.preco = null // sem preço (ta gratis).
console.log(!!produto.preco) // vai dar falso tmb.
console.log(produto) // vai dar falso tmb.


