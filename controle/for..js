let contador = 1 // Declaramos essa variavel contador que vai controlar o laço 
while (contador <= 10 ) { // A expressao que vai dizer se vai continuar ou nao 
console.log(`contador = ${contador}`)
contador ++ // E o incremento 
}

for(let i = 1; i<= 10; i++){

    console.log(`i= ${i}`)
}

const notas =[ 6.7, 7.4, 9.8, 8.1, 7.7]
for(let i = 0; i< notas.length; i ++) {

    console.log(`nota = ${notas[i]}`)
}

/* Visto neste exemplo :

Vimos que a partir de um while tentamos simular uma quantidade determinada de repetições 

E fizemos duas expressoes usando for 
                                            */