const { AST_ObjectGetter } = require("terser")

function tratarErroElacar (erro) {
//throw new Error('...')
// throw 10
// throw ture
// throw 'mensagem'

throw {
    nome: erro.name,
    msg: erro.message,
    date: new Date

}
}

function imprimirNomeGritado (obj){

try {

    console.log(obj.name. toUpperCase () + ('!!!'))

} catch (e) {

    tratarErroElacar(e)
}finally {

console.log('final')
}

}


const obj = {name : 'Roberto'}
imprimirNomeGritado(obj)

/* Try : È um bloco que pode geral algum tipo de erro
Cath : È um bloco onde voce trata o erro
Finaly: Ele sempre sera executado mesmo se nao tiver erro nenhum */






