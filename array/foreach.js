const aprovados = ['Gui','Julia','Felipe','Giulia', 'Rebeca']

// Exemplo 1
aprovados.forEach(function(nome,indice){
    console.log(`${indice + 1 }) ${nome}`)
}) 

// Exemplo 2
aprovados.forEach(nome => console.log(nome))

// Exemplo 3
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)

// " Resumo da Aula"

// Foi usado o forEach em tres exemplos , onde foi mostrado como percorrer um array.