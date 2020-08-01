const notas = [5.5 , 7.5, 8.5 , 4.3, 10]

for (i in notas) {

    console.log(i, notas [i])
}

const pessoa = {

    nome:'guilherme',
    sobrenome: 'galudo',
    idade: 21,
    peso: 90

}

for(atributo in pessoa) {

    console.log(`${atributo} = ${pessoa[atributo]}`)
}