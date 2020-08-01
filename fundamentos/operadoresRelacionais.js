console.log('01)', '1' == 1) // Aqui vai ser true pois os valores são iguais (1)
console.log('02)' ,'1' === 1) // Aqui vai ser false pois os tipos são diferentes . Um é string outro e number.
console.log('03)', '3' != 3) // Aqui vai ser false pois neste caso esta comparando se é diferente de 3. E como vimos não é
console.log('04)', '3' !== 3) // Aqui vai ser true pois o tipo são diferentes , por isso deu verdadeiro.
console.log('05)' , 3 < 2 ) // Aqui vai ser true pois 3 é sim maior que 2
console.log('06)', 3 > 2 ) // Aqui vai ser false pois 3 não é menos que 2
console.log('07)', 3 <=2) // Aqui false pois 3 não é menor igual 2
console.log('08)', 3 >= 2) // Aqui é true pois 3 é maior igual 2

const d1 = new Date (0)
const d2 = new Date (0)
console.log('09)', d1=== d2) // Este exemplo e o 10 vai false pois ele vai estar comparando o endereco de memoria
console.log ('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime ()) // Neste caso é verdadeiro pois esta sendo comparado o numero

console.log('12)', undefined == null) //  Aqui é verdadeiro pois ja são igual
console.log('13)', undefined === null) // Aquie é false pois pois os tipos são diferentes 
