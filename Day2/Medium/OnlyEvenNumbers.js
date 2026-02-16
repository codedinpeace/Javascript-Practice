function onlyEvenNumbers(arr){
    const evenNumbers = arr.filter((a)=>a%2 === 0)
    return evenNumbers
}

console.log(onlyEvenNumbers([1,2,3,4,5,6,7,8,9,10]))