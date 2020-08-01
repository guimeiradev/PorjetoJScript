const pessoa = {
    nome: 'Rebeca',
    idade: 3,
    peso: 13 
}

console.log(Object.keys(pessoa)) // A funcao Object.keys vai pegar todas as chaves de um objeto 
//console.log(Object.values(pessoa)) // A funcao Object.Values vai pegar todos os valores dos objetos.
console.log(Object.defineProperty(pessoa)) // A fucao object.entries vai retornar os valores dentro de um array

Object.defineProperty(pessoa).forEach(([chave,valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object,defineProperty(pessoa , 'dataNascimento',{
 enumerable: true,
 writable: false,
 value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest,o1,o2)