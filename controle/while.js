function getInteiroAleatorioEntre(min,max) {

const valor = Math.random() *  (max - min) + min
return Math.floor(valor)

}

let opcao  = 0

while (opcao !=  -1) {

opcao = getInteiroAleatorioEntre (-1,10)

console.log(`´´Opaco escolhida foi ${opcao}. `)
}

console.log('Ate a proxima !')


/* A declaração while cria um laço que executa uma rotina especifica 
enquanto a condição de teste for avaliada como verdadeira . */