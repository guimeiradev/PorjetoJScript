function pessoa () {

this.idade = 0

setInterval(function () {
    this.idade++ 
    console.log(this.idade)
}.bind(this), 1000)
}

new pessoa

// Exemplo 2
function pessoa () {

    this.idade = 0
    
    const self = this
    setInterval(function () {
        self.idade++ 
        console.log(self.idade)
    }, 1000)
    }
    
    new pessoa


    /* Foi criado uma funcao atribuida com this , ainda dentro dessa funcao
    foi criado uma funcao chamada setInterval que dispara uma funcao a partir
    do intervalo que passou . No final do primeiro exemplo que fizemos foi colocado
    o bind para prender o this da funcao pessoa.

    No segundo exemplo criamos uma constante chamada self passamos o valor this a ela . Depois alteramos o valor 
    this por self */ 