// Colecao dinamica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca de produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca doo produto']
console.log(produto)

const carro = { 
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco :{
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
    nome: 'Junior',
    idade: 19
    }, {
    nome: 'Ana',
    idade:42
    }],
    calcularValorSeguro: function() {
        //...
    }
}

carro.proprietario.endereco.numero = 1000
console.log(carro)

// Usando o delete para deletar os condutores do carro

//delete carro.condutores
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)

/* Nesta aula foi mostrado a criacao de um objeto atraves do new.
A criacao de um objeto literalmente .
Criacao de um objeto dentro do outro , um objeto com array.

Depois vimos como acessar um objeto a partir da noracao ponto. */