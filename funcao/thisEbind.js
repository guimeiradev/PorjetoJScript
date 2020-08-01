const pessoa = {
    saudacao : 'bom dia !',
    
    falar() {

        console.log(this.saudacao)

    }


}

pessoa.falar ()

const falar = pessoa.falar

falar () // Conflitos entre paradigmas : funcional e o.o 

const FalarDePessoa = pessoa.falar.bind (pessoa)
FalarDePessoa ()


/* O bind é um metedo responsavel por amarrar um determinado objeto para ele ser o dono da execucao 
daquele metedo sempre que ele ser executado. 

È importante saber que o bind so chama tal objeto se o objeto for referenciado com o this */