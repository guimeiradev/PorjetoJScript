// O array é um estrutura indexada , ele sempre vai começar do elemento 0 e vai indo 1,2,3...
const valores = [7.7,8.9,6.3,9.2]                           
console.log(valores[0],valores[3]) //Neste caso imprimimos o elemento [7.7] que é o elemento 0 e o [9.2] que é o elemento 3
console.log(valores[4])  // Aqui estamos pedindo para imprimir o elemento 4. Mas como não existe o js vai retornar como (undefined)                                           

valores [4] = 10 // Aqui estamos adcionando o elemento 10 no array valores , isso não daria problema nenhum.
// valores [10] = 10 Neste caso estamos adcionando um numero com indice 10 . O js é bem esperto , ele vai imprimir quem tem 6 elementos vazios ate o decimo
console.log(valores)
console.log(valores.length) // O .length nos diz quantos elementos temos no array. Neste caso temos 5

valores.push({id: 3}), false , null , 'teste') // Como o js é uma linguagem de tipagem fraca , ele vai aceitar multiplos valores de diferentes tipos
console.log(valores) // A funçao PUSH  no array serve para adcionar mais elementos 

console.log(valores.pop()) // A função POP vai retirar o o ultimo elemento do alray. Que no caso seria o "teste"
delete valores[0] // E o delete é usado para tirar determiando elemento . Que neste caso o elemento a ser tirado foi o "0"
console.log(valores)

console.log(typeof valores) // No js o array é do tipo object 