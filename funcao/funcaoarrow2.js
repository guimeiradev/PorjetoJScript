function pessoa (){

this.idade = 0 

setInterval(() => {

    this.idade++
    console.log(this.idade)
},1000)
}

new pessoa


// Neste exemplo criamos a funcao interval com arrow function e vimos que ela nao varia .