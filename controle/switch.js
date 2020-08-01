const imprimirResultado = function (nota)  {

switch (Math.floor(nota)) { // O math.floor é usado para aredondar o numero para baixo

case 10 :    // Neste exemplo colocamos os case um em cima do outro, isso é valido , nao a problema.
case 9:
    console.log('Quadro de honra')
    break  // O break é um operador usado para separar as execuções 
case 8: case 7:
    console.log('Aprovado')    
    break    
case  6: case 5: case 4:
    console.log('Recuperacao')
    break
case 3: case 2: case 1: case 0:
    console.log('Reprovado')
    break
default: // O default é um tipo de else 
    console.log('Nota invalida')

    }

}

imprimirResultado(10,9)
imprimirResultado(8.55)
imprimirResultado(6.55,4.89)
imprimirResultado(3.5, 2.50)
imprimirResultado(-1)
imprimirResultado(11)


/* Recaptulando 

* Switch é um seleção multipla 
* Switch não é uma expressao relacional , que retorna verdadeiro ou falso.
* Switch por padrao voce usa o break para executar casos e sair . Caso nao coloque ele vai executar todos
os cases*/