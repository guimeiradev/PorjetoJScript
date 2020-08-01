const notas = [7.7,8.5,4.6,5.3,3.4,10]


// Filtrando sem callback 

let notasBaixas = []

for(let i in notas) {

    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)


// Com callback

const notasBaixas2 = notas.filter(function (nota){
    return nota < 7
})
console.log(notasBaixas2)

// Com callback e arrow 

const notasBaixas3 = notas.filter(nota => nota < 7) 


/* Reusmo :

Neste exemplo usamos o filter para filtrar as notas menores que 7. Fizemos tres exemplos e vimos que com metodo
callback é bem mais pratico fazer o filter */