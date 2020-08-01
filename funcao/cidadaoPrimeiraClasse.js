// Função em JS é first-class Object  ( Citizens)
// Higher-order function 

// criar funcao de forma literal

function fun1 () {}         /* Criar de forma literal é voce criar usando a palavrinha function e essa funcao 
                            pode receber parametros ou retornar  um valor. O retorno é opcional , caso voce nao retrone nada
                            a funcao retorna undfined . Outra coisa importante é que os blocos são obrigatorios . */ 


 // Armazenar numa variavel     
 
 const fun2 = function () {} /*  Alem de voce poder criar uma funcao de forma literal . Voce consegue armazenar uma funcao numa variavel .
                                Neste caso voce pode chamar a contante que automaticamente a funcao vai ser invocada */


 // Armazenar em um array 

 const array = [function (a,b) { return a + b},fun2,fun1] /* Aqui estamos criando uma funcao dentro de um array . Como podemos ver 
                                                            imprimimos apena o primeiro elemento */
 console.log(array[0](2,3))


// Armazenar em um atributo de objeto 

const obj = {}

obj.falar = function () {return 'opa'}

console.log(obj.falar ())

// Passar funcao como parametro

function run (fun) { 

    fun ()
}

run(function () {console.log('executando...')})


// Uma funcao pode retornar / conter um funcao 

function soma (a,b) {

    return function (c){

        console.log(a+b+c)
    }

}
soma(2,3)(4)