const prod1 = {} //chaves representas objeto 
prod1.nome = 'celular ultra mega' // cria nome dinamicamente ( nao precisa anunciar antes)
prod1.preco = 4899.35
prod1['Desconto legal'] = 0.40 // evitar atributos com espaço
                                // criou mais um atributo dentro do objeto com barra

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla: 1,  // da pra adc objes dentro de obj
        obj: {  // INCLUSIVE com mesmo nome, mas um nome unico por obj.
            blabla: 2
        }
    }
}
console.log(prod2)

// nao confunda com json, exemplo abaixo de como é json
'{ "nome": "camisa polo", "preco": 79.90}'