console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'bola' // Essa é uma forma de adcionar um atributo mesmo que o atributo nao esteja dentro do objeto
console.log(obj1.nome)



function Obj(nome) {

this.nome = nome // This atribui o nome e deixa visivel pra quem  quer criar e estanciar um objeto fora dos blocos

this.exec = function () {

console.log('exec...')

}

}

const obj2 = new Obj('Cadeira') 
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()