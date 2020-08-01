function soma () {

    let soma = 0
    for (i in arguments){

        soma += arguments [i]

    }
    return soma 
}

console.log(soma())
console.log(soma(1))
console.log(soma(2,3))
console.log(soma(2,3,4,5,55))
console.log(soma(32,44,44,'teste'))
console.log(soma('a','b','c'))

// Neste exemplos foi mostrado como ter parametros variaveis numa funcao 

