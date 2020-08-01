function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min 
    return Math.floor(valor)

}

const obj = {max : 50, min: 40}
console.log(rand(obj))
console.log(rand({min : 955}))
console.log(rand({}))
console.log(rand())

/* Neste exemplo foi criado uma funcao que retornara um valor aleatorio.
Foi passado dois atributos só que dentro de operadores destructuring {}
Isso faz que o atributo min e max saia de dentro de obj sem precisar 
usar notacao ponto como vimos no exemplo anterior .