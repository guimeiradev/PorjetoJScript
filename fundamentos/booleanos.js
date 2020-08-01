const { isatty } = require("tty")

let isAtivo = false
console.log(isAtivo) 

isAtivo = true
console.log(isAtivo)

isAtivo = 0
console.log(! isAtivo) // '!!' Sempre ira retornar true ou false , depesnde da situaçao

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!! 'texto')
console.log(!! [])
console.log(!! {})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos....')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra fianlizar....')

console.log(!!(''|| null || 0 || ' ')) //neste caso o valor a ser retornado vai ser 'true' pois o ultimo valor é verdadeiro.

console.log((''|| null || 0 || 'opa')) // E quando nao tem não tem nenhuma negaçao (!!) o resultado vai ser sempre verdadeiro , que no caso seria o "opa"


let nome = ''
console.log(nome || 'Desconhecido') // Neste caso atribuimos uma varaivel com nome null. Neste caso sere imprimido "Dewsconhecido" pois o nome nao foi dado

nome = 'Guilherme'
console.log(nome || 'Desconhecido') //Como podemos ver neste caso foi imprimido o nome "Guilherme" pois foi dado o nome .



/*           Curiosidades !! 

    O "!!" no js é interpretado como negação

    O "||" é interpretado como "OU"
                                                    */