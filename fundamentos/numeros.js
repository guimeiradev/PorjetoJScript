

const peso1 = 1.0


const peso2 = Number ('2.0') /* Uma segunda forma de criar um numero.
                                Nesse caso o number é uma funçao , 
                                todo texto que comeca com letra maisucala é uma funcao   */
console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) // O .isInteger é uma forma de saber se o numero é realmente inteiro 
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871  

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) //O .toFixed voce usa para colocar a quantidade de casas voce quer depois da virgula ou ponto.
console.log(media.toString(2)) //O .toString voce usa para saber que tipo de dado esta lidando  Neste caso esta sendo convertido em numero binadrio pois colocamos o valor 2 entre parentese
console.log(typeof Number)