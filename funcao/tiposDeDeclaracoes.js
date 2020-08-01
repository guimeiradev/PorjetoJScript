// function declaration
console.log(soma(3,4))

function soma (x,y) {   // Neste tipo de declaracao voce pode chamar a funcao  em qualquer lugar . Ou seja em cima ou embaixo
    return x + y
}

console.log(soma(3,4))

// function expression 

const sub = function(x,y) { // Ja nessa só em baixo apos de declarar ela 
    return  x - y
    
}
console.log(sub(3,4))
// named function  expression 

const mult =  function mult (x,y) {  // Essa a mesma coisa

    return x * y
}


// As funcoe mais usadas são as duas primeiras 