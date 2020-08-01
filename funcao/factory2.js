    function criarProduto (nome,preco) {

        return {
            nome,
            preco,
            desconto : 0.1
        }
    }

console.log(criarProduto('pc gamer', 5.000))

console.log(criarProduto('iphone xs max', 5.000))

console.log(criarProduto('HEADSET', 500))