    function getPreco(imposto = 0 , moeda = 'R$') {

        return `${moeda} ${this.preco * (1 - this,desc) * (1 + imposto)}`
    }

    // Exemplo 1
    const produto = {

        nome : 'Notebook',
        preco: 4589,
        desc : 0.15,
        getPreco
    }

    global.preco = 20 
    global.desc = 0.1

    console.log(getPreco())
    console.log(produto.getPreco())

    // Exemplo 2 call & apply
    const carro = {preco : 4997, desc : 0.20}

    console.log(getPreco.call(carro))
    console.log(getPreco.apply(carro))


    console.log(getPreco.call(carro, 0,17,'$'))
    console.log(getPreco.apply(carro, [2323,'$']))


    /* Foi visto algumas formas de se chamar uma funcao .

    1- Forma diretamente como vimos na linha 18
    2- Forma com objeto como vimos na linha 19
    3- Forma com call e apply 

    E a diferença ente o call e apply é a forma como voce passa os parametros para chamada da funcao .

    No caso do call visto na linha 28 , voce passa os parametros diretamente dentro da funcao
    E no caso do apply voce passa os parametros dentro de um array. Visto na linha 29 */