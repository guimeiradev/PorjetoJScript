// Objeto Extensions
const produto = Object.preventExtensions({
    nome : 'Qualquer' , preco : 1.99 , tag : 'promoção'
})


produto.nome = 'borracha'
produto.descricao = 'borracha branca '
delete produto.tag 
console.log(produto)

// O objeto extension nao permite que voce adicione mais parametros só permite excluir e alterar.

// Objeto seal
 const pessoa = {nome: ' Juliana', idade: 25}
 Object.seal(pessoa)

 pessoa.sexo = 'feminino'
 pessoa.nome = 'raquel'
 delete pessoa.idade 
 console.log(pessoa)


 // O objeto.seal nao permite que adicione parametros e que exclua. Ele só permite que voce altere os parametros existentes.

 