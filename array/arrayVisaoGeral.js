let aprovados = new Array('bia','ana','Carlos')
console.log(aprovados)

aprovados = ['bia','carlos','ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[3])

aprovados[3]= 'paulo'
aprovados.push('abia')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados= ['bia','carlos','rafael']
aprovados.splice(1,1, 'elemento 1', 'elemento 2') /* O primeiro elemento vai dizer o indice que voce quer trabalhar. 
                                                     O Segundo elemento vai mostra a altura que vai começar ser feita a exclusao 
                                                     que no exemplo foi feita uma exclusao apenas. Se fosse dois ia excluir o elemento 
                                                     1 e o dois assim sucessivamente... */
console.log(aprovados)


// " Resumo Da Aula "

// O array é uma estutura dinamica ,cresce dinamicamente e diminui.

// È uma estrutura indexada a partir do indice 0

// O array é um objeto. 

// Nos acessamos os elementos a partir do indice zero

// Vimos que se excluimos algum elemento ira ficar undfined no lugar . Ou seja ainda ira existir o indice

// Adicionamos elementos em indice expecifico e a partir do push.

// Foi usado o sort . Ele altera o array, reorganiza nao genrando outro array

// Usamos a funcao splice que é usada para adcionar novos elementos e excluir


