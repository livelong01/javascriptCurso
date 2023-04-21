const valores = [7.7, 8.9 , 6.3 , 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])
valores[10] = 10 // deixa o restante vazio e avisa no print
console.log(valores)
valores[4] = 10
console.log(valores)
console.log(valores.length) // tamanho do array
valores.push({id: 3}, false, null, 'teste') // adciona valores apos o ultimo (no caso o 10)
console.log(valores) 
console.log(valores.pop()) // retira ultimo valor do array por padrao. Neste caso o 'teste'
console.log(valores)
delete valores[0] // delete apenas limpa o espaco, nao o apaaga como o pop. (fica vazio)
console.log(valores) //veja por aqui como fica.

console.log(typeof valores)
