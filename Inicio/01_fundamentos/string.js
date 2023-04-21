const escola = "Cod3r"
console.log(escola.charAt(4)) // retorna a letra numero 4
console.log(escola.charAt(5)) // ele deixa vazio.
console.log(escola.charCodeAt(3)) // para identificar o unicode da letra 3 (para html)
console.log(escola.indexOf("3")) // mostra a posicao do 3 na string no caso começa do zero, 0.1.2.3
console.log(escola.substring(1)) // cortar a letra da posicao 0 (inclui o 1)
console.log(escola.substring(0,3)) // nao inclui o 3.
console.log("escola".concat(escola).concat("!"))
console.log("escola" + escola + "!") // melhor usar o "+"
console.log(escola.replace(3, "e")) // substitui o n 3 pela letra e
console.log(escola.replace(/\w/g, "e")) // substitui rudo por letras "e"
console.log("Ana,Maria,Pedro".split(",")) // cria array com 3 elementos e separa por virgula.

