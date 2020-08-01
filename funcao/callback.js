const fabricantes = ['mercedes','audi','bmw']

function imprimir(nome,indice){

    console.log(`${indice + 1}. ${nome}`)
    
}

fabricantes.forEach(imprimir)

// Forma de chamar 2 

fabricantes.forEach(function(a) {

    console.log(a)
})

// Forma de chamar 3

fabricantes.forEach(fabricantes => console.log(fabricantes))

// O método forEach() executa uma dada função em cada elemento de um array.

