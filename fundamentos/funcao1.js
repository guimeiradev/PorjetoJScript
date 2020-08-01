// Funcao sem retorno

function imprimirSoma(a, b) {

console.log(a+b)

}

imprimirSoma(2,3)


// Funcao com retono

function soma(a,b = 0) {
 
    return a + b
}

console.log(soma(2+3))
console.log(soma(2)) // Neste caso deu 2 pois o b ja foi definido como zero. Ou seja , todo numero somado com zero é ele mesmo