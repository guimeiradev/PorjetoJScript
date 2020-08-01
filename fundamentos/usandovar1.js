{{{{
        var sera = 'Sera???'
        console.log(sera)         //Criando uma variavel dentro de um escopodo de uma funcao ela nao sera visivel globalmente

                                }}}}
console.log(sera) // criando fora do escopo, sim . Sera visivel ! Ela sendo visivel qualquer pode subscrever sua variavel 



function teste() {
                     // Dentro de uma funcao nao sera visivel tambem
var local = 123       

}