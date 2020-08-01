// Formas de criação de objetos 

// Forma Literal 

const obj1 = {}
console.log(obj1)

// Object em JS 
console.log(typeof Object, typeof new Object) // Mostrando o tipo 

const obj2 = new Object
console.log(obj2)

// Funcoes construtoras 

function Produto(nome,preco,desc) {
    this.nome = nome 
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)

    }
}

const p1 = new Produto('Caneta', 7.99,0.15)
const p2 = new Produto('Notebook',2199.99, 0.25)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Funcao Factory 
function criarFuncionario(nome , salarioBase, faltas) {

        return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
        return (salarioBase / 30) * (30 - faltas)

     }   
   }
}

const f1 = criarFuncionario('Joao', 7980,4)
const f2 = criarFuncionario('Guilherme', 10000,1)

console.log(f1.getSalario(), f2.getSalario())

// Object.Create 

const filha = object.create(null)

filha.nome = 'ana'
console.log(filha)

// Uma funcao famosa que retorna um objeto...

 const fromJSON = JSON.parse('{"info": " Sou um JSON"}')
 console.log(fromJSON.info)