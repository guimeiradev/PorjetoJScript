const produtos = [
    {nome: "Notebook", preco:2499, fragil: true },
    {nome : "Ipad PRO", preco: 4199. ,fragil: true},
    {nome : "Copo de vidro", preco:12.49, fragil:true},
    {nome : "copo de plastico", preco: 18.99, fragil: false}
        
]

console.log(produtos.filter(function(p) {
    return false
}))
const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil 

console.log(produtos.filter(caro).filter(fragil))

// Nesta aula usamos o metodo filter para filtrar alguns produto do array 