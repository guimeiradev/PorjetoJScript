// novo recurso do  es2015

const pessoa = {
    nome : 'Ana',
    idade : 5,
    endereco : {

        logradouro : 'Rua ABC',
        numero : 1000

    }

}


const {nome, idade} = pessoa
console.log(nome, idade )

const {nome: n, idade: i} = pessoa
console.log(n , i)

const { sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada) // Aqui estamos tirando um atributo que nao existe dentro do obj . Neste caso o js retorna como undfined 

const { endereco: {logradouro , numero, cep }} = pessoa
console.log(logradouro, numero, cep) // Aqui estamos estraindo os atributo de dentro do objeto endereco. Neste caso acrescentamos cep .

// O destructuring é uma forma de vooce tirar alguns elementos da sua estrutura. Como vimos a cima .