const nums = [1,2,3,4,5,6,7,8,9,10]

for(x in nums) {
                       //Neste primeiro exemplo usamos o breack para quando chegar no indice 5 parar
if(x == 5){

break

}
    console.log(`${x} = ${nums[x]}`)
}

for(y in nums) {



if(y == 5) {

    continue
}
                      // Neste segundo exemplo usamos o continua para pular o indice 5 e continuar 6,7,8
console.log(`${y} = ${nums[y]}`)

}


