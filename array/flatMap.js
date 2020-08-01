const escola = [{
    nome: 'Turma m1',
    alunos: [{
        nome:'Gustavo',
        nota: 9.5
    },{
        nome:' ana',
        nota: 8.5
    }] 
},{    
     nome: 'Turma 2',
     alunos:
 [{

        nome: 'Rebeca',
        nota: 8.9
    },{
        nome: 'Roberto',
        nota: 7.3
    }]

 }]
 

    const getNotaDoAluno = aluno => aluno.nota
    const getNotasDaturma = turma => turma.alunos.map(getNotaDoAluno)

    const notas1 = escola.map(getNotasDaturma)
    console.log(notas1)  

    console.log([].concat([9.5,8.5],[8.9,7.3]))


    // Implementando o FlatMap

    Array.prototype.flatMap = function(callback){
        return Array.prototype.concat.apply([],this.map(callback))
    }

    const notas2 = escola.flatMap(getNotasDaturma)
    console.log(notas2)