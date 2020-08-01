const quaseArray = {0: 'Rafael', 1: 'Ana',2: 'Bia'}
console.log(quaseArray)
Object.defineProperty(quaseArray,'toString',{
    value: function() { return Object.values(this) },
        enumerable: false
})

console.log(quaseArray[0])

const meuArray = ['Rafael', 'Ana', 'Bia']
console.log(quaseArray.toString(), meuArray)

// "Resumo da aula"

// Foi feita uma simulaçao de um array onde usamos a estrutura de um objeto .