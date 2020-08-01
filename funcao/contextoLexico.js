const valor = 'global'

function minhaFuncao () {

    console.log(valor)

}

function exec () {

    const valor = 'local'

    minhaFuncao()

}

exec()  

/* contexto lexico

Ela é muito importante para uma funcao , quando ela for declarada ela carrega com sigo o constexto que foi escrito.

Ou seja , por isso foi achado o valor global e nao o local quando executamos o a funcao exec. */