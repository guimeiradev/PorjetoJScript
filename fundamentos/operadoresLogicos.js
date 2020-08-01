function compras (trabalho1, trabalho2) {

const comprarSorvete = trabalho1 || trabalho2 // Neste caso usamos o operado ou (||) onde se o primeiro é verdadeiro não a nessecidade de olhar o outro.
const comprarTv50 = trabalho1 && trabalho2 // Neste caso estamos utilizando o operedor e (&&) onde precisa os dois precisa ser true para ser verdadeiro , caso contrario é falso
const comprarTv32 = trabalho1 != trabalho2 // Neste caso estamos utilizando o operador ou exclusivo que seria basicamente  diferente (!=)
const manterSaudavel = !comprarSorvete // Neste caso estamos utilizando o operador unario , negacao

return {comprarSorvete,comprarTv50,comprarTv32,manterSaudavel}

}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))