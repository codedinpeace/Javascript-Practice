function findMissingNumber (arr){
    let n = arr.length + 1
    let set = new Set(arr)
    let actualNumber = 0

    for(let i = 0; i < n; i++){
        if(!set.has(i)){
            actualNumber = i
        }
    }

    return actualNumber
}

console.log(findMissingNumber([1,2,3,5]))