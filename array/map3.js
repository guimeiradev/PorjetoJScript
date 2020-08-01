Array.prototype.map2 = function (){
    const meuarray =[]

    for(let i = 0;i < this .length; i ++){
        meuarray.push(callback(this[i], i , this))
    }
    return meuarray
}
const carrinho = [
    '{"nome": "borracha", "preco": 3.45}',
    '{"nome": "caderno", "preco": 13.90}',
    '{"nome": "kit de lapis" , "preco": 41.22 } ',
    '{"nome": "caneta" , "preco": 7.50}'

]



const paraObjeto = Json =>JSON.parse(Json)
const apenasOpreco = produto => produto.preco 

const resultado = carrinho.map(paraObjeto).map(apenasOpreco)
console.log(resultado)
