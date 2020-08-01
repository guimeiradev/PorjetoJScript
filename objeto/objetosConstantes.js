// pessoa -> 123 -> {...}

const pessoa = {nome : 'joao'} // Neste exemplo vimos que atraves da notacao ponto voce consegue alterar um  objeto dentro de uma constante.
pessoa.nome = 'pedro'          // Tambem nao é possivel deletar ou adcionar algum atributo

console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana'}

Object.freeze(pessoa)

pessoa.nome = 'maria'         // Ja nesse ja nao da. Pois a claussula objeto freeze nao permite
console.log(pessoa.nome)      // Tambem nao é possivel deletar ou adcionar algum atributo


const pessoaConstante = Object.freeze( {nome = 'joao'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)
