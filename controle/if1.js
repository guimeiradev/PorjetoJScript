function soBoaNoticia (nota) {

if(nota >= 7) {

console.log('aprovado com ...' + nota)



}

}

/* 1) Neste primeiro exemplo usamos uma expressao relacional , comparando a nota 
comparando a nota com determinado numero . No caso o numero teria que ser maior que 7 ou igual...
*/

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seOValorForVerdade (valor) {

if(valor) {

console.log('È verdade ...' + valor)


}


}


seOValorForVerdade(0)
seOValorForVerdade(undefined)
seOValorForVerdade(null)
seOValorForVerdade('')
seOValorForVerdade(NaN)
seOValorForVerdade(' ')
seOValorForVerdade(-1)
seOValorForVerdade([])
seOValorForVerdade({})
seOValorForVerdade('?')
seOValorForVerdade([1,2])

/* 2) Neste segundo exemplo usamos passamos uma valor apenas e vimos se era verdadeiro
ou nao. */