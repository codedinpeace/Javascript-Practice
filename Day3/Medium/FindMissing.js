function findMissingNumber(arr){
    let Length = arr.length + 1
    let missingNumber = 0;
    let set = new Set(arr)

    for(let i = 0; i < Length; i++){
        if(!set.has(i)){
            missingNumber = i
        }
    }

    return missingNumber
}   

console.log(findMissingNumber([1,2,3,5]))