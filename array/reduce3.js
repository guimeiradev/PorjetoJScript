Array.prototype.reduce2 = function(calbaack, valorInicial) {
    const indiceInicial = valorInicial ? 0 : 1
    let acumulador = valorInicial || this[0]
    for (let i = 1 ; i < this.length; i ++) {
        acumulador = calbaack(acumulador, this [i], i , this)
    }
    return acumulador
}

const soma = (total, valor ) => total + valor
const nums = [1,2,3,4,5,6]
console.log(nums.reduce2(soma)) 