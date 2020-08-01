/* Hoisting em js é um comportamento padrao de mover a declaração para o topo .
Seja o topo daquele contexto do codigo que esta trabalhando , ou seja  o topo da função do que esta trabalhando. */

console.log('a =', a)

var a =2

console.log('a =' , a)

// O que aconteceu foi isso 

var a 
console.log('a=', a) // Foi declarado automaticamente atraves do hoisting

a= 2
console.log('a =', a)

// Dentro de uma fução o resultado é o mesmo 

function teste (){

    console.log('a =', a)

    var a =2
    
    console.log('a =' , a)

    }

// Fazendo isso com let o efeito do hoisting nao ocorre 

console.log('b =', b)

let b = 2
console.log('b=',b)