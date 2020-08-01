const nome = 'rebeca'
const  concatenacao = 'ola' + nome + '!'
const template = `
ola
${nome}!`
console.log(concatenacao, template)

// expressoes...
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')} !`)

// A funcao up tem o poder de substituir as palavras para maiuscula
