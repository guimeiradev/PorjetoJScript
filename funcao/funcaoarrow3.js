let comparandoComThis = function (param){

    console.log(this === param)

}

comparandoComThis(global)

const obj = {}
comparandoComThis = comparandoComThis.bind(obj)
comparandoComThis(global)
comparandoComThis(obj)


let comparandoComThisArrow = param => console.log(this === param)
comparandoComThisArrow(global)
comparandoComThisArrow(module.exports)

comparandoComThisArrow = comparandoComThisArrow.bind(obj)
comparandoComThisArrow(obj)


// O this de uma funcao arrow é o this associado ao contexto de uma funcao arrow .
// Entao não existe variação de forma alguma . Nem com bind.