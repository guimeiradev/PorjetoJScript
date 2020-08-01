const pilotos = ['Vettel','Alonso','Raikkomen','Massa']
pilotos.pop() // Vai remover o ultimo elemento do array
console.log(pilotos)

pilotos.push('Vertappen')
console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

// Splice pode adicionar e remover

// Adicionar 
pilotos.splice(2,0,'Bottas', 'Massa')
console.log(pilotos)

// Removendo elementos a partir do metodo splice

pilotos.splice(3,1) // massa saiu novamente
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // Novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4) // Este exemplo vai ser criado um novo array do elemento um ao 4 . Porem o elemento 4 nao entra
console.log(algunsPilotos2)
 

// "Resumo da aula"

// Slice que pega uma parte do array 

// Splice que remove e adiciona

// UNshift adiciona na primeira posiçao

// Shift remove da primeira posiçao 

// Push adiciona na ultima posiçao 

// Pop remove da ultima posiçao 