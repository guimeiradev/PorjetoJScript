const escola = 'Cod3r'

console.log(escola.charAt(4)) // O charAT retorna o caractere especificado a partir de uma string. Que no caso seria o "r"
console.log(escola.charAt(5)) // Neste caso colocamos um valor que nao coincidi com o numero determinado na string. Portanto o resultado foi vazio
console.log(escola.charCodeAt(3)) // Neste caso o método charCodeAt retorna um inteiro entre 0 e 65535 representando a unidade de código UTF-16 que no caso do 3 é o 51
console.log(escola.indexOf('3')) // O método indexOf() retorna o índice da primeira ocorrência do valor especificado . Que no caso foi o 3

console.log(escola.substring(1)) // O método substring() retorna um subconjunto de uma string entre um indice e outro, ou até o final da string.
console.log(escola.substring(0, 3)) // Neste caso vai pegar o indice 0 e nao ira pegar o indice 3

console.log('Escola'.concat(escola.concat('!'))) // Essa é uma forma de concatenar strings
console.log('Escola' + escola + '!') // Essa é uma segunda forma de concatenar uma string . 
console.log(escola.replace(3, 'e')) // O método replace() retorna uma nova string com algum ou todas as combinações do padrão substituído por um substituto

console.log('Ana,Maria,Pedro'.split(',')) // O método split() divide um objeto String em um array de strings ao separar a string em substrings.