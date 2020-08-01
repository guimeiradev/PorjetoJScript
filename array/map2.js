const carrinho = [
    '{"nome": "borracha", "preco": 3.45}',
    '{"nome": "caderno", "preco": 13.90}',
    '{"nome": "kit de lapis" , "preco": 41.22 } ',
    '{"nome": "caneta" , "preco": 7.50}'

]

// Retornar apenas os resultados 

const paraObjeto = Json =>JSON.parse(Json)
const apenasOpreco = produto => produto.preco 

const resultado = carrinho.map(paraObjeto).map(apenasOpreco)
console.log(resultado)


// Refazer desafio de retornar os resultados