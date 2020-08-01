/* O que é um objeto ? Um objeto em js é uma coleção de chave valor. È voce ter um nome de atributo 
e voce passa um identificador para ele. Pode ser um texto , numero , booleano ou uma funcao.

E dentro de um objeto voce pode ter um outro objeto .
                                                            */



const prod1 = {}
prod1.nome = 'Samsung a70'
prod1.preco = 2800
prod1['Desconto Legal'] = 0.40 // Sempre bom evitar atributos com espaço 

console.log(prod1)

const prod2 = {

    nome: 'Pc gamer',
    preco: 5300.90,
    cfg:{ processador : 'intel i7',
          memoriaRam :'16gb',
          placaDeVideo : 'gtx 1080 ti'
    }
}

console.log(prod2)

// No exemplo do prod2 foi criado um objeto dentro de outro. È possivel



/* Json
 È um formato baseado em texto padrão para representar dados estruturados com base na sintaxe do objeto JavaScript.
 É comumente usado para transmitir dados em aplicativos da Web (por exemplo, enviar alguns dados do servidor para o cliente,
 para que possam ser exibidos em uma página da Web ou vice-versa).*/
 
'{"nome" : "Camisa Polo", "Preco": 79.90 }'

console.log(prod2)