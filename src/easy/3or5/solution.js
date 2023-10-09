//# Multiples of 3 or 5

//If you list all the natural numbers below 10 that are multiples of 3 or 5, you'll get 3, 5, 6 and 9. The sum of these multiples is 23.

//Find the sum of all the multiples of 3 or 5 below 1000.
function sumMultiplesOf3And5(limit){
    let sum = 0
    for (let i = 1; i <limit; i++){
        if (i % 3 === 0  || i % 5 === 0) {
            sum += i
        }
    }
    return sum
}

const limit = 1000
const result = sumMultiplesOf3And5(limit)
console.log(result)