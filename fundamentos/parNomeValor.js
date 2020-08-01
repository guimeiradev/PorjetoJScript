// par nome/valor

const saudacao = 'opa' // contexto léxico 1

function exec () {

const saudacao = 'falaaa' // contexto léxico 2
return saudacao

}

// Objetos são grupos aninhados de pares 

const cliente = {
nome: 'Guilherme',
idade: 21,
peso: 90,
endereco : {

logradouro : 'rua libero carnicelli',
numero : 08

    }

}

console.log(saudacao)
console.log(exec())
console.log(cliente)



