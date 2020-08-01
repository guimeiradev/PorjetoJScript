// Armazenando uma funcao em uma variavel

    const imprimirSoma = function (a,b) {

        console.log(a + b)

    }

    imprimirSoma(2,3)


// Armazenando uma funcao arrow em uma variavel

    const soma = (a, b) => {   

     return a + b

    }

    console.log(soma(2,3))
// * O "=>" é chamado de arrow ela substitui o nome function

// retorno implicito 

const subtracao = (a, b) => a - b // Forma mais curta de declarar uma funcao
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a) // Forma mais curta de se declarar uma funcao com apenas 1 parametro
imprimir2 ('legal !!')