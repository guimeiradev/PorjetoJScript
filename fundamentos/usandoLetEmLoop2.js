const funcs = []

for (let i = 0; i < 10; i++) {

    funcs.push(function (){

        console.log(i)
    })

}

funcs[2]()
funcs[8]()

/* Podemos perceber que a variavel let  puxou determinado indice de forma correta 2 e 8. 
Aocontrorio de var que puxou o valor 10 que foi dado */