console.log(7/ 0) //Todo numero dividido por zero nao gera um erro , gera o infinito .
console.log("10" / 2) // Voce pode fazer operações matematicas com tipo string desde que respeite o formato do numero. Ex console.log("10.2" / 2) esse foramato nao rodaria 
console.log("show!" * 2) // Neste caso gera o "nan" not a number 
console.log(0.1 + 0.7) // E aqui gera a imprecisao um outro numero
// console.log(10.toString()) Voce nao consegue chamar o literal com a funcao.
console.log((10.345).toFixed(2)) // Mas consegue chamar o literal dentro de parenrese e chamar a funcao . Sem precisar armazenar em variavel