let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1 // 1 é verdadeiro e 0 falso
console.log(!true)
console.log(!false)


console.log(!isAtivo) // covnerter em boleano
console.log(!!isAtivo) // covnerter em boleano
                        // se colocar uma exclamacao inverte ( ex: se for falso vira verdadeiro)
                        // com duas aponta o que for de verdade, ex: !!true . É verdadeiro
console.log('Os verdadeiros')
console.log(!!3) // numeros positivos e negativos fora zero sao verdadeiros
console.log(!!-1)
console.log(!!" ") // espacos nao vazios como esse caso sao verdadeiros
console.log(!![]) // colchetes e chaves vazios sao verdadeiros
console.log(!!{})
console.log(!!Infinity) // infinito é veraddeiro
console.log(!!(isAtivo = true)) // confirmacao se é verdadeiro 1


console.log('Sao falsos...')

console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log("para finalizar")
console.log(('' || null || 0 || ' ')) // no "OU" basta um ser verdadeiro para se tornar verdadeiro
console.log(('' || null || 0 || 'epa'|| 123)) // ele retorna o ""PRIMEIRO"" valor verdadeiro, q ele encontrar


// para descobrir se uma string ta vazia, pode fazer assim

let nome = 'Lucas'
console.log(nome || 'Desconhecido') // verdadeiro ele retorna 'LUCAS
nome = ''
console.log(nome || 'Desconhecido') //Como vazio é falso, ele retorna 'Desconhedido'






